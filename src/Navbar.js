export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Portfolio</a>
        <ul>
            <li>
                <a href="./pages/projects">Projects</a>
            </li>
            <li>
                <a href="./pages/contact.js">Contact</a>
            </li>
        </ul>
    </nav>
}