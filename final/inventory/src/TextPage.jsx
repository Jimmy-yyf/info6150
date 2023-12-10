import './TextPage.css'
import Card from './Cards'
import Heroimage from "/src/image/Hero-image.jpg";
import kashi from "/src/image/kashi.jpg";
import sailimu from "/src/image/sailimu.jpg";
import duku from "/src/image/duku.jpg";
function TextPage({setPage}) {
  function go(event, page) {
    event.preventDefault();
    setPage(page);
  }
  return (
    
    
  
     <main id="main">
      

        <div className ="heroimagepage">
          <div className = "heroimagepage__discription">
            <h2 className= "heroimagepage__title">
              <span className = "text-outstand">Travel </span> is, even if it is the same world, you find the world is not the same
            </h2>
            <h3 className = "heroimagepage__subtitle">
              Explore our Journey in XinJiang!
            </h3>
            <a className='heroimagepage__nav' href="" onClick={ (e) => go(e, "CardsPage") }>Find More!</a>
                    
          </div>
          <div className = "heroimage">
            <img className="heroimage__pic" alt="Red car in the sand" src={Heroimage}/> 
          </div>
        </div>
        <div className='cardsarea'>
           <h2 className= 'cardsarea__title'>About our trail</h2>
                <Card
                  className="card"
                  onReadMore=  {(e) => go(e, "CardsPage")}
                  title="Sayram Lake"
                  pic={sailimu}
                  alt="Sayram Lake"
                  text="Sayram Lake is an endorheic freshwater lake in the northern Tianshan Mountains at Börtala Mongol Autonomous Prefecture, Xinjiang, China, less than 50 km (31 mi) from the border with Kazakhstan. The name Sayram originally derives from Kazakh, meaning 'blessing'"
                  linkText="Read More"
                />
                   <Card
                  className="card"
                  onReadMore=  {(e) => go(e, "CardsPage")}
                  title="Bayanbulak"
                  pic={duku}
                  alt="Bayanbulak grassland"
                  text="Bayanbulak is the second largest grassland in China, located in the Bayanbulak Basin of the Tian Shan mountains in northwest China. The terrain is mostly flat, and encompasses a middle section of the Kaidu River . The reserve is 200 km northwest of Korla in Bayingolin Mongol Autonomous Prefecture of Xinjiang Uyghur Autonomous Region."
                  linkText="Read More"
                />
                <Card
                  className="card"
                  onReadMore=  {(e) => go(e, "CardsPage")}
                  title="Kashgar"
                  pic={kashi}
                  alt="two kids play in Kashgar"
                  text="Kashgar is a city in the Tarim Basin region of southern Xinjiang, China. It is one of the westernmost cities of China, located near the country's border with Kyrgyzstan and Tajikistan. For over 2,000 years, Kashgar was a strategically important oasis on the Silk Road between China, the Middle East, and Europe. It is one of the oldest continuously inhabited cities in the world and has a population of 711,300 people (as of 2019). Kashgar's urban area covers 15 km2 (5.8 sq mi), although its administrative area extends over 555 km2 (214 sq mi)."
                  linkText="Read More"
                />
        </div>

    </main>

    

  );
}

export default TextPage;
