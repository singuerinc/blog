import React from "react"

export default ({ data, pathContext }) => {
  console.log(pathContext)
  const post = data.markdownRemark
  const {date} = pathContext
  return (
    <article>
      <header>
        <span>{date}</span>
        <h1>{post.frontmatter.title}{" "}</h1>
      </header>
      <section>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
      <footer>
        <span>{post.frontmatter.categories.join(", ")}</span>
      </footer>
    </article>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html,
      frontmatter {
        title,
        categories
      }
    }
  }
`