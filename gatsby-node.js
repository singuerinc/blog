const path = require(`path`)
const slugify = require('slug')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const { categories } = node.frontmatter
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    const [, date, title] = slug.match(/^\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/)
    const value = `/${slugify(categories.concat([date]).join('-'), '/')}/${title}/`
    createNodeField({ node, name: `slug`, value })
    createNodeField({ node, name: `date`, value: date })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug,
                date
              },
              frontmatter {
                categories
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug
          },
        })
      })
      resolve()
    })
  })
}