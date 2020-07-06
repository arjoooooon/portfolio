/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
    plugins: [
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: "www.arjuntaneja.com",
                protocol: "https",
                hostname: "www.arjuntaneja.com"
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'G-3BSFLBTLG1',
                head: true
            }
        },
        {
            resolve: `gatsby-plugin-firebase`,
            options: {
                credentials: {
                    apiKey: "AIzaSyAQVNpLk7FCzDKzjJTYKhCLH822sbYVy_w",
                    authDomain: "arjuntaneja-c9606.firebaseapp.com",
                    databaseURL: "https://arjuntaneja-c9606.firebaseio.com",
                    projectId: "arjuntaneja-c9696",
                    storageBucket: "arjuntaneja-c9606.appspot.com",
                    messagingSenderId: "536763287823",
                    appId: "1:536763287823:web:56937ac5f8f392497c567a",
                    measurementId: "G-PJPN1XBJM2",
                }
            }
        }
        `gatsby-plugin-react-helmet`,
    ],
}
