
import './CardsPage.css'
import{ useState} from 'react';
import Button from './Button';
import Xinjiang from "/src/image/Xinjiang.jpg";
import kashi from "/src/image/kashi.jpg";
import sailimu from "/src/image/sailimu.jpg";
import duku from "/src/image/duku.jpg";

function CardsPage() {

    const[page, setPage] = useState('xinjiang');
    
    return (
      
      <main id ='main' className=" CardsPage">
    
  
  <div className="accordion">
  <Button visual = "link" className='accordion__nav' aria-expanded={page === 'xinjiang'}
       onClick={() => setPage('xinjiang')}>Xinjiang</Button>
   <Button visual = "link" className='accordion__nav'  aria-expanded={page === 'Kashgar'}
       onClick={() => setPage('Kashgar')}>Kashgar</Button>
          <Button visual = "link" className='accordion__nav'aria-expanded={page === 'Sayram Lake'}
       onClick={() => setPage('Sayram Lake')}>Sayram Lake</Button>
                <Button visual = "link" className='accordion__nav'aria-expanded={page === 'Bayanbulak'}
       onClick={() => setPage('Bayanbulak')}>Bayanbulak</Button>
</div>
{(page === 'xinjiang') && 
  <div className = "accordion__discription">
    <h2 className = "accordion__title">About XinJiang</h2>
    <img 
          src= {Xinjiang}
          className = "accordion__pic"
          alt="open air vendors in xinjiang"
          />
          <p className = "accordion__text">Xinjiang, officially the Xinjiang Uygur Autonomous Region,is an autonomous region of the People's Republic of China (PRC), located in the northwest of the country at the crossroads of Central Asia and East Asia. Being the largest province-level division of China by area and the 8th-largest country subdivision in the world, Xinjiang spans over 1.6 million square kilometres (620,000 sq mi) and has about 25 million inhabitants. Xinjiang borders the countries of Mongolia, Russia, Kazakhstan, Kyrgyzstan, Tajikistan, Afghanistan, Pakistan and India. The rugged Karakoram, Kunlun and Tian Shan mountain ranges occupy much of Xinjiang's borders, as well as its western and southern regions. The Aksai Chin and Trans-Karakoram Tract regions, both administered by China, are claimed by India. Xinjiang also borders the Tibet Autonomous Region and the provinces of Gansu and Qinghai. The most well-known route of the historic Silk Road ran through the territory from the east to its northwestern border. </p>
          <h3 className = "accordion__subtitle">History</h3>
          <p className = "accordion__text">The earliest inhabitants of the region encompassing modern day Xinjiang were genetically of Ancient North Eurasian and Northeast Asian origin, with later geneflow from during the Bronze Age linked to the expansion of early Indo-Europeans. These population dynamics gave rise to a heterogeneous demographic makeup. Iron Age samples from Xinjiang show intensified levels of admixture between Steppe pastoralists and northeast Asians, with northern and eastern Xinjiang showing more affinities with northeast Asians, and southern Xinjiang showing more affinity with central Asians.Between 2009 and 2015, the remains of 92 individuals in the Xiaohe Cemetery were analyzed for Y chromosome and mitochondrial DNA markers. Genetic analyses of the mummies showed that the paternal lineages of the Xiaohe people were of Europeanorigin, while the maternal lineages of the early population were diverse, featuring both East Eurasian and West Eurasian lineages, as well as a small number of Indian lineages. Over time, the west Eurasian maternal lineages were gradually replaced by east Eurasian 
          maternal lineages. This implies a pattern of outmarriage to women from Siberian communities, which, over many hundreds of years, led to the loss of the original diversity of mtDNA lineages observed in the earlier Xiaohe population.</p>
   </div> }

{ (page === 'Kashgar') && <div className = "accordion__discription">
  <h2 className = "accordion__title">About Kashgar</h2>
    <img 
      src= {kashi}
      className = "accordion__pic"
      alt="two kids play in Kashgar"
    />
    <p className = "accordion__text">Kashgar (Uyghur: قەشقەر) or Kashi (Chinese: 喀什) is a city in the Tarim Basin region of southern Xinjiang, China. It is one of the westernmost cities of China, located near the country's border with Kyrgyzstan and Tajikistan. For over 2,000 years, Kashgar was a strategically important oasis on the Silk Road between China, the Middle East, and Europe. It is one of the oldest continuously inhabited cities in the world and has a population of 711,300 people (as of 2019). Kashgar's urban area covers 15 km2 (5.8 sq mi), although its administrative area extends over 555 km2 (214 sq mi).</p>
    <h3 className = "accordion__subtitle">History</h3>
          <p className = "accordion__text">The earliest mention of Kashgar occurs when a Chinese Han dynasty envoy travelled the Northern Silk Road to explore lands to the west.
          Another early mention of Kashgar is during the Former Han (also known as the Western Han dynasty), when in 76 BCE the Chinese conquered the Xiongnu, Yutian (Khotan), Sulei (Kashgar) and a group of states in the Tarim Basin almost up to the foot of the Tian Shan range.
Ptolemy speaks of Scythia beyond the Imaus, which is in a "Kasia Regio", probably exhibiting the name from which Kashgar and Kashgaria (often applied to the district) are formed. The country's people practised Zoroastrianism and Buddhism before the coming of Islam.In the Book of Han, which covers the period between 125 BCE and 23 CE, it is recorded that there were 1,510 households, 18,647 people and 2,000 persons able to bear arms. By the time covered by the Book of the Later Han (roughly 25 to 170 CE), it had grown to 21,000 households and had 3,000 men able to bear arms.
present	Kashgar / Kashi	People's Republic of China	  Capital of an independent political entity
The Book of the Later Han provides a wealth of detail on developments in the region:In the period of Emperor Wu [140–87 BC], the Western Regions were under the control of the Interior [China]. They numbered thirty-six kingdoms. The Imperial Government established a Colonel [in charge of] Envoys there to direct and protect these countries. Emperor Xuan [73–49 BC] changed this title [in 59 BC] to Protector-General.</p>
</div> }

{ (page === 'Sayram Lake') && <div className = "accordion__discription">
  <h2 className = "accordion__title">About Sayram Lake</h2>
    <img 
      src= {sailimu}
      className = "accordion__pic"
      alt="Sayram Lake with flower"
    />
    <p className = "accordion__text">Sayram Lake  , also known as Santai Haizi  or historically the "Clean Sea" , is an endorheic freshwater lake in the northern Tianshan Mountains at Börtala Mongol Autonomous Prefecture, Xinjiang, China, less than 50 km (31 mi) from the border with Kazakhstan. The name Sayram originally derives from Kazakh, meaning "blessing".The lake is the largest (458 km2 or 177 sq mi) and also the highest (at 2,070 m or 6,790 ft) alpine lake in Xinjiang, largely filled by glacial meltwater, residual precipitation from the Eurasian westerlies and runoffs from the surrounding mountain chains, as well as some groundwater recharges. It is an AAAA National Scenic Area since 2010.</p>
    <h3 className = "accordion__subtitle">History</h3>
          <p className = "accordion__text">Sayram Lake is located along the northern branch of the historic Northern Silk Road. The mountainous region it belongs had been largely uninhabited throughout history, but the valleys east of it was historically settled by Saka nomads and various Tocharian people such as Jushi and Wusun, and later by the Göktürks and Oirat (Dzungar) Mongols. Around the lake, there are also archeological sites of various ancient rock arts, tombs and ruins of temples, ovoo, steles and stage stations from different dynasties.Late Southern Song Taoist monk Qiu Chuji recorded in his famous travel journal that the lake as "spanning 200 li and surrounded by snowing summits", calling it a "heavenly pool". Other famous visitors such as Mongol Empire politician Yelü Chucai and Qing dynasty viceroy Lin Zexu (who was exiled to Xinjiang after the First Opium War) also recorded descriptions of the lake.A local folktale relates that the lake was formed by a young Kazakh couple who had been separated by a demon, and were forced to jump into an abyss to be reunited. Their tears filled the abyss, forming the lake.</p>
          </div> }

{ (page === 'Bayanbulak') && <div className = "accordion__discription">
  <h2 className = "accordion__title">About Bayanbulak</h2>
    <img 
      src= {duku}
      className = "accordion__pic"
      alt="Bayanbulak grassland with ice mountain"
    />
    <p className = "accordion__text"> Bayanbulak is the second largest grassland in China, located in the Bayanbulak Basin of the Tian Shan mountains in northwest China. The terrain is mostly flat, and encompasses a middle section of the Kaidu River ("Peacock River"). The reserve is 200 km northwest of Korla in Bayingolin Mongol Autonomous Prefecture of Xinjiang Uyghur Autonomous Region.As a high-altitude marshland (at 2,000 - 2,500 meters), the reserve is an important breeding and staging ground for birds and waterfowl, and is the highest-altitude breeding ground for swans in the world.The area has been designated an Important Bird and Biodiversity Area by Birdlife International.</p>
    <h3 className = "accordion__subtitle">Flora and Fauna</h3>
          <p className = "accordion__text">The vegetation is sub-alpine and alpine meadow and steppe for the most part. The lowest sections of the basin are swamp and swamp-meadow. The greater grasslands of the Bayanbulak are one of the most productive pasturelands in China, with an estimated 1.5 million sheep causing over-grazing in areas around the reserve.In recent years, there has been aggressive growth of Pedicularis kansuensis, a type of Lousewort, that has damaged the local vegetation.The area is best known for its breeding swans. The swan population was estimated at over 20,000 in the 1980s, but by 2001 this had declined to 2,000. Over 120 species of birds have been recorded at the site. The swamp areas, most valuable to the waterfowl, have characteristic vegetation of Carex (sedges), Triglochin palustris (marsh arrowgrass), Batrachium, and Utricularia (bladderwort).</p>
          <h3 className = "accordion__subtitle">Topography</h3>
          <p className = "accordion__text">The Bayanbulak Basin is an intermontane valley of the basin-and-range of the Tian Shan mountains, to the north of the Tarim Basin. The total area of grassland is 23,835 km2 (9,203 sq mi), of which the reserve itself covers 1,486 km2 (574 sq mi). The Kaidu River runs from west to east through the area, at times meandering and leaving cutoff lakes, and is fed from streams from the high ranges of the Tian Shan to the north and south. The rivers are meandering and braided over gravel beds. In 1982, the Du-Ku highway was built across the Tian Shan, greatly opening access to the area. </p>
          </div> }
          

</main>
  
    );
  }
  

    export default  CardsPage;