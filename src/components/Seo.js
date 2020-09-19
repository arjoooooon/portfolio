/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title }) => {

  return (
    <div>
    </div>
  )
}

export default SEO

// const SEO = ({
//   title,
//   description,
//   keywords,
//   image,
//   pathname,
//   article,
//   date,
// }) => (
//   <StaticQuery
//     query={query}
//     render={({
//       site: {
//         siteMetadata: {
//           defaultTitle,
//           titleTemplate,
//           defaultDescription,
//           defaultKeywords,
//           siteUrl,
//           site_name,
//           twitterUsername,
//         },
//       },
//     }) => {
//       const seo = {
//         title: title || defaultTitle,
//         description: description || defaultDescription,
//         keywords: keywords || defaultKeywords,
//         image: image || defaultImage,
//         url: `${siteUrl}${pathname || "/"}`,
//         site_name: site_name,
//       }
//       // Default Website Schema
//       const schemaOrgJSONLD = [
//         {
//           "@context": "http://schema.org",
//           "@type": "LocalBusiness",
//           name: defaultTitle,
//           logo: `${siteUrl}${logoImg}`,
//           image: `${siteUrl}${defaultImage}`,
//           telephone: "+84 972016100",
//           email: "sales@reliasoftware.com",
//           openingHours: "Mo, Tu, We, Th, Fr",
//           hasMap: "https://goo.gl/maps/8NYPk7UJQPk1p4se7",
//           address: {
//             "@type": "PostalAddress",
//             streetAddress:
//               "Golden Bee Building, Nguyen Kiem Street, Phu Nhuan District",
//             addressLocality: "Ho Chi Minh City",
//             addressCountry: "Vietnam",
//           },
//           description: defaultDescription,
//           url: siteUrl,
//         },
//       ]

//       if (article) {
//         schemaOrgJSONLD.push({
//           /* Regular Article Schema */
//           "@context": "http://schema.org",
//           "@type": "Article",
//           author: {
//             "@type": "Person",
//             name: "Arjun Taneja",
//           },
//           copyrightHolder: {
//             "@type": "Person",
//             name: "Arjun Taneja",
//           },
//           copyrightYear: "2020",
//           creator: {
//             "@type": "Person",
//             name: "Arjun Taneja",
//           },
//           publisher: {
//             "@type": "Organization",
//             name: "Arjun Taneja",
//             logo: {
//               "@type": "ImageObject",
//               url: `${siteUrl}${image || defaultImage}`,
//             },
//           },
//           description: seo.description,
//           headline: seo.title,
//           url: seo.url,
//           name: seo.title,
//           image: {
//             "@type": "ImageObject",
//             url: `${siteUrl}${seo.image}`,
//           },
//           datePublished: date || "2020-06-08",
//           mainEntityOfPage: seo.url,
//         })
//       }

//       return (
//         <>
//           <Helmet title={seo.title} titleTemplate={titleTemplate}>
//             <meta name="description" content={seo.description} />
//             <meta name="keywords" content={seo.keywords} />
//             <meta name="og:site_name" content={seo.site_name} />
//             {seo.url && <meta property="og:url" content={seo.url} />}
//             {(article ? true : null) && (
//               <meta property="og:type" content="article" />
//             )}
//             {(article ? false : !null) && (
//               <meta property="og:type" content="website" />
//             )}
//             {seo.title && <meta property="og:title" content={seo.title} />}
//             {seo.description && (
//               <meta property="og:description" content={seo.description} />
//             )}
//             {seo.image && <meta property="og:image" content={seo.image} />}
//             <meta name="twitter:card" content="summary_large_image" />
//             {twitterUsername && (
//               <meta name="twitter:creator" content={twitterUsername} />
//             )}
//             {seo.title && <meta name="twitter:title" content={seo.title} />}
//             {seo.description && (
//               <meta name="twitter:description" content={seo.description} />
//             )}
//             {seo.image && <meta name="twitter:image" content={seo.image} />}
//             <script type="application/ld+json">
//               {JSON.stringify(schemaOrgJSONLD)}
//             </script>
//           </Helmet>
//         </>
//       )
//     }}
//   />
// )
// const query = graphql`
//   query SEO {
//     site {
//       siteMetadata {
//         description
//         image
//         keywords
//         siteUrl
//         site_name
//         title
//         titleTemplate
//         twitterUsername
//         url
//       }
//     }
//   }
// `
// export default SEO