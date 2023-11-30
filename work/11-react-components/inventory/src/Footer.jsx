import './Footer.css'
const footermenu = [
    {
    name: "About us",
    path: "/",
    },
    {
    name: "Connect us",
    path: "/about.html",
    },
    {
    name: "Cats",
    path: "/cats.html",
    },
    {        name: "Cats",
        path: "/cats.html",
        },
    ];

function Footer(){
    const list = footermenu.map( item => {
        return (
          <li key={item.name} className="footer-nav__item">
            <a className="footer-nav__link" href={item.path}>
              {item.name}
            </a>
          </li>
        );
        });
        return (
        <footer class="footer">
          <nav className={"footer-nav"}>
            <ul className="footer-nav__list">
              { list }
            </ul>
           </nav>
          </footer>
        );
}
export default Footer;