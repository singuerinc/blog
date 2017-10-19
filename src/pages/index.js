import React from 'react'
import Link from 'gatsby-link'

export default ({data}) => {
  return (
    <div>
    {data.allMarkdownRemark.edges.map(({ node }) =>
      <article key={node.id} className="mb4">
        <header>
          <span className="fw3 gray f5">{node.fields.date}</span>
        </header>
        <section>
          <Link to={node.fields.slug} className="link f3 fw3 f2-m fw2-m f1-l fw2-l mv1 db title-gradient">{node.frontmatter.title}{" "}</Link>
        </section>
        <footer>
          <span className="f6 moon-gray">{node.frontmatter.categories.join(", ")}</span>
        </footer>
      </article>
    )}
    </div>
  )
}

export const query = graphql`
query IndexQuery {
  allMarkdownRemark {
    edges {
      node {
        id,
        frontmatter {
          title,
          categories
        },
        fields {
          slug,
          date
        }
      }
    }
  }
}
`
