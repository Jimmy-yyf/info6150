
import {useState} from 'react'
import './App.css'
import TextPage from './TextPage';
import CardsPage from './CardsPage';
import PanelsPage from './PanelsPage';
import  NavBar from './NavBar'
import Header from './Header';
import Footer from './Footer';

function App() {
  const[page, setPage] = useState('TextPage');

  return (
<>
<Header/>
<NavBar setPage={setPage} />

{ (page === 'TextPage') && <TextPage/> }
{ (page === 'CardsPage') && <CardsPage/> }
{ (page === 'PanelsPage') && <PanelsPage/> }
 <Footer/>
</>

  );
 
}

export default App;
