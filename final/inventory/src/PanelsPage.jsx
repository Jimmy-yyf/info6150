
import './PanelsPage.css'
import { useState } from 'react';
import Button from './Button';
import Xinjiang from "/src/image/Xinjiang.jpg";
import kashi from "/src/image/kashi.jpg";
import sailimu from "/src/image/sailimu.jpg";
import duku from "/src/image/duku.jpg";
import Xinjiang2 from "/src/image/Xinjiang2.jpg";
import kashi2 from "/src/image/kashi2.jpg";
import sailimu2 from "/src/image/sailimu2.jpg";
import duku2 from "/src/image/duku2.jpg";
function PanelsPage() {
  const galleryItems = [
    {  name: 'xinjiang image 1', category: 'xinjiang' ,alt: 'open air vendors in xinjiang',src: Xinjiang},
    {  name: 'Kashgar image 1', category: 'Kashgar',alt: 'two kids play in Kashgar',src:kashi},
    {  name: 'Sayram Lake image 1', category: 'Sayram Lake',alt: 'Sayram Lake with flower',src: sailimu},
    {  name: 'Bayanbulak image 1', category: 'Bayanbulak',alt: 'Bayanbulak grassland with ice mountain',src: duku},
    {  name: 'xinjiang image 2', category: 'xinjiang',alt: 'mountain seen from the plan',src: Xinjiang2},
    {  name: 'Kashgar image 2', category: 'Kashgar',alt: 'road between the walls',src: kashi2},
    {  name: 'Sayram Lake image 2', category: 'Sayram Lake',alt: 'Sayram Lake with the sunset',src: sailimu2},
    {  name: 'Bayanbulak image 2', category: 'Bayanbulak',alt: 'Bayanbulak grassland with road in the center',src: duku2}
  
  ];
  const [filteredItems, setFilteredItems] = useState(galleryItems);

  const filterItems = (category) => {
    if (category === 'All') {
      setFilteredItems(galleryItems);
    } else {
      const newItems = galleryItems.filter(item => item.category === category);
      setFilteredItems(newItems);
    }
  };

    return (
   <main id= 'main' className="PanelsPage">
    <div className = "gallery__button__area">
    <Button visual = "link" className='gallery__button' 
       onClick={() => filterItems('All')}>All</Button>
  <Button visual = "link" className='gallery__button' 
       onClick={() => filterItems('xinjiang')}>xinjiang</Button>
        <Button visual = "link" className='gallery__button' 
       onClick={() => filterItems('Kashgar')}>Kashgar</Button>
          <Button visual = "link" className='gallery__button' 
       onClick={() => filterItems('Sayram Lake')}>Sayram Lake</Button>
                <Button visual = "link" className='gallery__button' 
       onClick={() => filterItems('Bayanbulak')}>Bayanbulak</Button>
      </div>
      <div className="gallery__image__area">
        {filteredItems.map(item => (
          <div key={item.name} className="gallery-item">
            
            {<img className = "gallery__image"  alt ={item.alt} src= {item.src}></img>}
           
          </div>
        ))}
      </div>
    
      

  
  
        </main> 
  
    );
  }
  
  export default  PanelsPage;
  