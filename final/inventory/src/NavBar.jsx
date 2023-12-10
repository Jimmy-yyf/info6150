import './NavBar.css'
function NavBar({ setPage,showNavBar, className}) {
    let NavNames = 'nav-bar';
    if (showNavBar) {
        NavNames +=   'show' 
    }  
    function go(event, page) {
    event.preventDefault();
    setPage(page);
    }

    return (
    <nav
    className = {`${NavNames} ${className}`}>
    <ul className = "NavBar__list" >
    <li key = 'TextPage'><a className = "NavBar__link" href="" onClick={ (e) => go(e, "TextPage") }>
    Homepage
    </a></li>
    <li key = 'CardsPage'><a className = "NavBar__link"href="" onClick={ (e) => go(e, "CardsPage") }>
    Description
    </a></li>
    <li key = 'PanelsPage'><a className = "NavBar__link" href="" onClick={ (e) => go(e, "PanelsPage") }>
    Gallery
    </a></li>
    </ul>
    </nav>
    );
    }
export default NavBar;