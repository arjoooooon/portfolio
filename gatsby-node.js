const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const today = new Date().toISOString().split("T")[0]

module.exports = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const collection = getNode(node.parent).sourceInstanceName
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: "collection",
      value: collection,
    })
    createNodeField({
      node,
      name: `slug`,
      value: `/${collection}${slug}`,
    })
    createNodeField({
      node,
      name: "isFuture",
      value: node.frontmatter.date >= today,
    })
  }
}
module.exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
      type MarkdownRemark implements Node {
        frontmatter: Frontmatter
      }
      type Frontmatter {
        tags: [String!]!
      }
    `
  createTypes(typeDefs)
}

const COLLECTIONS = [
  {
    name: "blog",
    postsPerPage: 10,
    hasPostPage: true,
  },
  {
    name: "projects",
    postsPerPage: 10,
    hasPostPage: true,
  },
]

const filterEdges = name => edges =>
  edges.filter(edge => edge.node.fields.collection === name)

const buildPagesCollectionGenerator = ({ edges, createPage }) => ({
  name,
  postsPerPage,
  hasPostPage,
}) => {
  const filteredEdges = filterEdges(name)(edges)

  /**
   * CREATE INDIVIDUAL ITEMS
   */
  if (hasPostPage) {
    filteredEdges.forEach((edge, index) => {
      const { slug } = edge.node.fields
      const previous = index === edges.length - 1 ? null : edges[index + 1].node
      const next = index === 0 ? null : edges[index - 1].node
      createPage({
        path: slug,
        component: require.resolve(`../src/templates/${name}-post.js`),
        context: { slug, previous, next },
      })
    })
  }
}

module.exports = async function ({ actions, graphql }) {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { ne: false } } }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              collection
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const pagesCollectionGenerator = buildPagesCollectionGenerator({
    edges: data.allMarkdownRemark.edges,
    createPage,
  })

  COLLECTIONS.forEach(pagesCollectionGenerator)
}
