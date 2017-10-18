import React from 'react'
import Link from 'gatsby-link'

export default (props) => {
  const {data} = props
  console.log(props)
  return (
    <div>
    {data.allMarkdownRemark.edges.map(({ node }) =>
      <article key={node.id}>
        <header>
          <span>{node.fields.date}</span>
        </header>
        <section>
          <Link to={node.fields.slug}>{node.frontmatter.title}{" "}</Link>
        </section>
        <footer>
          <span>{node.frontmatter.categories.join(", ")}</span>
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
