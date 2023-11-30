import Card from './Cards'
import './CardsPage.css'
import{ useState} from 'react';

function CardsPage() {
    const [showText, setShowText] = useState(true);

    return (
      
      <div className=" CardsPage">
    
  
       <Card
  className="card"
onReadMore=  {() => setShowText(!showText)}
title="Jorts"
pic="http://placekitten.com/100/100?image=3"
alt="a smug orange cat sitting with tail curled around front paws"
text="It has been 0 days since a Trash Can mishap"
linkText="Read More"
/>
{showText && <p classname = "readmore-text">"Page-Text"</p>}

  
        </div>
  
    );
  }
  

    export default  CardsPage;