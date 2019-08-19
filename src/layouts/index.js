import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
import "syntax-highlighting/assets/css/prism/prism-base16-ateliercave.light.css";
import "tachyons";

const Header = () => (
  <div>
    <div>
      <h1 className="fw3 mt4 mb1">
        <Link to="/" className="link dark-gray">
          @singuerinc
        </Link>
      </h1>
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div className="sans-serif dark-gray mh4 mh3 mw-100 mw7-l center-l">
    <Helmet
      title="singuerinc | blog"
      meta={[
        {
          name: "description",
          content:
            "I make apps in HTML5, Javascript, Node.js, Ruby on Rails among others technologies."
        },
        { name: "author", content: "Nahuel Scotti" },
        {
          property: "og:image",
          content:
            "http://www.singuerinc.com/img/home/singuerinc--overlay-app.jpg"
        },
        { property: "og:image:type", content: "image/jpg" },
        { property: "og:image:width", content: '816" ' },
        { property: "og:image:height", content: '386" ' },
        { property: "og:locale", content: "en_US" },
        { property: "og:type", content: "article" },
        { property: "og:title", content: "@singuerinc" },
        {
          property: "og:description",
          content:
            "I make apps in HTML5, Javascript, Node.js, Ruby on Rails among others technologies."
        },
        { property: "og:url", content: "https://blog.singuerinc.com/" },
        { property: "og:site_name", content: "@singuerinc" },
        { property: "fb:app_id", content: "1774104969502286" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "@singuerinc" },
        { name: "twitter:title", content: "@singuerinc" },
        {
          name: "twitter:description",
          content:
            "I make apps in HTML5, Javascript, Node.js, Ruby on Rails among others technologies."
        },
        { name: "twitter:url", content: "https://blog.singuerinc.com/" }
      ]}
    />
    <Header />
    <div className="mv4">{children}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
