import './NavBar.css'
function NavBar({ setPage }) {
    function go(event, page) {
    event.preventDefault();
    setPage(page);
    }

    return (
    <nav class = "NavBar">
    <ul Class = "NavBar__list">
    <li ><a class = "NavBar__link" href="" onClick={ (e) => go(e, "TextPage") }>
    TextPage
    </a></li>
    <li><a class = "NavBar__link"href="" onClick={ (e) => go(e, "CardsPage") }>
    CardsPage
    </a></li>
    <li ><a class = "NavBar__link" href="" onClick={ (e) => go(e, "PanelsPage") }>
    PanelsPage
    </a></li>
    </ul>
    </nav>
    );
    }
export default NavBar;