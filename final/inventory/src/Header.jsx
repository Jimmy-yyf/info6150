import './Header.css'
import Button from './Button';
import  NavBar from './NavBar'
import HeaderIcon from './image/Headericon.jpg';

function Header({setPage,showNavBar,onToggle,setColor} ){
  function go(event, page) {
    event.preventDefault();
    setPage(page);
    }
    return(
        <header className = "header">
         
          <a className='Header__logo-area' href="" onClick={ (e) => go(e, "TextPage") }>
        <img 
          src= {HeaderIcon}
          className = "header__logo"
          alt="air-balloon"
          />
          </a>
          <h1 className = "header__title">
          Traveler In XinJiang
          </h1>
          
          <Button visual = "link" className='header__button'
       onClick={onToggle}> ShowNav</Button>
       <Button visual = "link" className='change__button'
       onClick={setColor} > Change Theme</Button>
<NavBar className= 'header__Nav' setPage={setPage} showNavBar={showNavBar} />
        </header>
        
    );
}
export default Header;