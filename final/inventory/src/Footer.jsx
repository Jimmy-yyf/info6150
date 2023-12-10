import './Footer.css'


function Footer({ setPage, className}){
  function go(event, page) {
    event.preventDefault();
    setPage(page);
    }
        return (
        <footer className="footer">
 <nav
    className = {`"nav-bar" ${className}`}>
    <ul className = "NavBar__list" >
    <li key = 'TextPage'><a className = "NavBar__link" href="" onClick={ (e) => go(e, "AboutUs") }>
    About Us
    </a></li>
    <li key = 'PublicLicense'><a className = "NavBar__link"href="" onClick={ (e) => go(e, "PublicLicense") }>
    Public License
    </a></li>
    <li key = 'Supportus'><a className = "NavBar__link" href="" onClick={ (e) => go(e, "Supportus") }>
    Support Us
    </a></li>
    </ul>
    </nav>
          </footer>
        );
}
export default Footer;