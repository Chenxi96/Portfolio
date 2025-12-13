

const Header = () => {
    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <span className="navbar-brand mb-0 h1">C.L</span>
                </div>
                <ul className="col nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">   
                        <a className="nav-link" href="#">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/blog">Blog</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;