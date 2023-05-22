export default function Navbar () {

    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-3 align-self-end">

                    <li className="nav-item">
                        <a className="nav-link" href="/home">ken!</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="/about">about</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/work">work</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/contact">contact</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
}