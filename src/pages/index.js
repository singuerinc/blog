import React from 'react'
import Link from 'gatsby-link'

const getClassNameByPostIndex = (index) => {
  const indexZeroClasses = "f2 f1-m f-headline-l"
  const indexAnyClasses = "f3 f2-m f1-l"

  return index === 0 ? indexZeroClasses  : indexAnyClasses
}

export default ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <article key={node.id} className="mb4">
          <header>
            <span className="fw3 gray f5">{node.fields.date}</span>
          </header>
          <section>
            <Link
              to={node.fields.slug}
              className={"link fw3 fw2-m fw2-l mv1 db title-gradient dim " + getClassNameByPostIndex(index)}
            >
              {node.frontmatter.title}{' '}
            </Link>
          </section>
          <footer>
            <span className="f6 moon-gray">
              {node.frontmatter.categories.join(', ')}
            </span>
          </footer>
        </article>
      ))}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [fields___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            categories
          }
          fields {
            slug
            date
          }
        }
      }
    }
  }
`
