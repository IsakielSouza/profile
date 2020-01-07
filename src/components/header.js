import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#171921`,
      marginBottom: `1.45rem`,
    }}
  >
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h4 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `#4ef579`,
              textDecoration: `none`,
            }}
          >
            <span
              style={{ color: "#fd78c5" }}
              class="styles__Code-cx2rsj-4 gQGhnS"
            >
              &lt;
            </span>
            {siteTitle}
            <span
              style={{ color: "#fd78c5" }}
              class="styles__Code-cx2rsj-4 gQGhnS"
            >
              /&gt;
            </span>
          </Link>
        </h4>
      </div>
    </>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
