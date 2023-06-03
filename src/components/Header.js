function Header(props) {
  return (
    <header>
        <div className="container flexbox">
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="">{props.home}</a></li>
                    <li><a href="">{props.about}</a></li>
                    <li><a href="">{props.blogs}</a></li>
                    <li><a href="">{props.contact}</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )

};
export default Header;