import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import 'tachyons'
import 'prismjs/themes/prism-tomorrow.css'
import './index.css'

const Header = () => (
  <div>
    <div>
      <h1>
        <Link to="/">@singuerinc</Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div className="sans-serif near-black">
    <Helmet
      title="singuerinc | blog"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
