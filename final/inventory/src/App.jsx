
import {useState} from 'react'
import './App.css'
import TextPage from './TextPage';
import CardsPage from './CardsPage';
import PanelsPage from './PanelsPage';
import Header from './Header';
import Footer from './Footer';
import AboutUs from'./AboutUs';
import PublicLicense from './PublicLicense';
import Supportus from './SupportUs';

function App() {
  
  const [isDark, setIsDark] = useState(false);
  const[page, setPage] = useState('TextPage');
  const [showNavBar, setShowNavBar] = useState(false);
  return (
<div className="App" data-theme={isDark? "dark": "normal"}>
<a className ="skip-link" href='#main'> Skip to content</a>
<Header setPage={setPage} showNavBar={showNavBar} onToggle={() => setShowNavBar(!showNavBar)}  setColor={() => setIsDark(!isDark)} />

{ (page === 'TextPage') && <TextPage setPage= {setPage} /> }
{ (page === 'CardsPage') && <CardsPage/> }
{ (page === 'PanelsPage') && <PanelsPage/> }
{ (page === 'AboutUs') && <AboutUs/> }
{ (page === 'PublicLicense') && <PublicLicense/> }
{ (page === 'Supportus') && <Supportus/> }
 <Footer setPage={setPage}  className ="footer"/>
</div>

  );
 
}

export default App;
