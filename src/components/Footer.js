function Footer(props) {
  return (
    <footer>
      <div className="container flexbox">
      <div className="copyright-wrapper">
        <p>&copy; {props.copyright}</p> |
        <p>{props.contactEmail}</p>
      </div>
      <nav className="footer-nav">
        <ul>
          <li><a href="#">{props.about}</a></li>
          <li><a href="#">{props.contact}</a></li>
          <li><a href="#">{props.privacypolicy}</a></li>
          <li><a href="#">{props.terms}</a></li>
        </ul>
      </nav>
      </div>

    </footer>
  )
}

export default Footer;