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
      <h1 className="fw3 mt3 mb1"><Link to="/" className="link dark-gray">@singuerinc</Link></h1>
      <h4 className="mv2 f4">Subtitle here</h4>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div className="sans-serif dark-gray mh3">
    <Helmet
      title="singuerinc | blog"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div className="mv4">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
