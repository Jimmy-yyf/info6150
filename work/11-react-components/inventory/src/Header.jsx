import './Header.css'
function Header(){
    return(
        <header className = "header">
        <img 
          src="http://placekitten.com/100/100?image=1"
          className = "header__logo"
          alt="Feline Logo"
          />
          <h1 className = "header__title">
          Header Title
          </h1>

        </header>
        
    );
}
export default Header;