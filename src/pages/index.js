import React from 'react'
import Link from 'gatsby-link'

export default ({data}) => {
  return (
    <ul>
    {data.allMarkdownRemark.edges.reverse().map(({ node }) =>
      <li key={node.id}>
        <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
          {node.frontmatter.title}{" "}
          </Link>
        <div>
          {node.frontmatter.categories.join(", ")}
        </div>
      </li>
    )}
    </ul>
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
          slug
        }
      }
    }
  }
}
`
