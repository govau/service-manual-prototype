import React from "react"

import "../uikit/css/footer.css"

const Footer = () => (
  <footer className="uikit-footer" role="contentinfo">
    <div className="container">
      <section className="uikit-footer__end">
        <img className="uikit-responsive-media-img" src="/assets/coat-of-arms.png" height="100" alt="Commonwealth Coat of Arms crest logo"></img>
        <p>
          <small>© Commonwealth of Australia</small>
        </p>
      </section>
    </div>
  </footer>
)

export default Footer
