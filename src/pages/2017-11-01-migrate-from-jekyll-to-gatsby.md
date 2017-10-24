---
title: "Migrate from Jekyll to Gatsby"
author: singuerinc
layout: post
categories:
  - jekyll
  - gatsby
  - graphql
---

# A bit of history

Some years ago I created my [blog](https://blog.singuerinc.com/) with [Jekyll](https://jekyllrb.com/) and it has been working well for a while.

I have never been a huge fan of Ruby, but because of requirements or convenience I made some apps with it (Rails / Sinatra / Jekyll / etc).

I used to like Jekyll because I could write my posts in Markdown and easily to iterate through them. At that time I took a theme called [Lanyon](https://github.com/poole/lanyon) and I tweaked a bit. That was a enough for me.

But recently I found that I was installing Ruby and Jekyll in my machine just to manage my blog (I mostly develop with Node). I tried to develop it inside a Docker container, but was extremely slow.

Some weeks ago one of my colleague at work talked me about [Gatsby](https://www.gatsbyjs.org), and since I was learning [React](https://reactjs.org/) and I started looking at [GraphQL](http://graphql.org/) (after attend a talk at [Nordic.js](http://nordicjs.com/)) I was very interested in give it a try.

# Migration from Jekyll to Gatsby

<div class="w-100"><img class="w-50 w-25-ns center db" src="/static/images/posts-assets/migrate-jekyll-to-gatsby/gatsby.svg" /></div>

## Data

One of the biggest concern about migrating from one generator to another is how you move the data. In my case I have around 45 posts, so it is not a big deal to convert from one type to another, but still a manual work that I wanted to avoid.

Luckily Gatsby works with Markdown and it can take the data from your YAML front matter block, so you don't have to change anything. You just need to install `gatsby-transformer-remark` plugin.

Then, in your `gatsby-config.js` file add:

```js
plugins: [
  'gatsby-transformer-remark'
]
```

## Theme

My blog is clean and simple, I don't need too much css, instead of bloating my blog with a theme I added [Tachyons](http://tachyons.io/). I managed to replicate 99% of my previous theme with classes from Tachyons. Something that I would like to do better is to remove the part that I do not use from it.

The current css file has less than 30 lines, the rest of the layout is created with tachyons classes: [https://github.com/singuerinc/blog/blob/master/src/layouts/index.css](https://github.com/singuerinc/blog/blob/master/src/layouts/index.css)

## Slug + Date

This was the only "tricky" one, since I wanted to preserve the same page names in order to make a 1:1 transition it was not possible with the default behavior from Gatsby.
I don't have a `date` field in my front matter block, so I need to extract the date from the file name.

The slug in my case is generated with this (default in Jekyll) structure:

```
https://blog.singuerinc.com/[n-categories]/YYYY/MM/DD/dashed-title/

// Given this data:
categories:
  - app
  - macos
  - vuejs
  - electron

filename: 2017-05-09-introducing-tomeito.md

// I would like to get:
/app/macos/vuejs/electron/2017/05/09/introducing-tomeito/
```

How I created it? Inside the `gastby-node`.

I used the `onCreateNode` function to tweak the slug:

```js
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const { categories } = node.frontmatter

    const filename = createFilePath({ node, getNode, basePath: `pages` })

    // get the date and title from the file name
    const [, date, title] = filename.match(/^\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/)

    // create a new slug concatenating everything
    const slug = `/${slugify(categories.concat([date]).join('-'), '/')}/${title}/`

    createNodeField({ node, name: `slug`, value: slug })

    // save the date for later use
    createNodeField({ node, name: `date`, value: date })
  }
}
```

## Deploy

I used to deploy to [GitLab Pages](https://about.gitlab.com/features/pages/), but I notice that from time to time it had his downtimes, so now I'm testing [Netlify](https://www.netlify.com/) with almost the same CI workflow:

<img class="dn db-ns" alt="Migrate Jekyll to Gatsby" title="Migrate Jekyll to Gatsby" src="/static/images/posts-assets/migrate-jekyll-to-gatsby/diagram-ci.svg">
<img class="dn-ns" alt="Migrate Jekyll to Gatsby" title="Migrate Jekyll to Gatsby" src="/static/images/posts-assets/migrate-jekyll-to-gatsby/diagram-ci--td.svg">

## Conclusions

Some key points:

- Node instead of Ruby
- Much faster development workflow, hot reload out of the box.
- I can query what I need and transform the data before using it. (I'm looking into the `gatsby-plugin-feed` to recreate the Atom Feed)
- React and GraphQL for free with Gatsby.
- Since I am confident with the Node ecosystem I'm able to contribute: First pull request to Gatsby: [https://github.com/gatsbyjs/gatsby/pull/2569](https://github.com/gatsbyjs/gatsby/pull/2569)
- Netlify vs GitLab Pages (hopefully 100% uptime)

Final thoughts:

Although the blog is the same, in content and look, the way that is created has completely changed.
For me it is a whole new experience, easier, and faster.

I wanted to move the blog to Node long time ago and it is finally there!

Now it is time for my portfolio (also built with Jekyll): [https://www.singuerinc.com/](https://www.singuerinc.com/)

## Show me the code

If you want to take a look at the code you can do it, it is published in GitHub: [https://github.com/singuerinc/blog](https://github.com/singuerinc/blog)