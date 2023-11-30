import{ useState} from 'react';
import Text from './TextPageText'
import './TextPage.css'
import Button from './Button';

function TextPage() {
  const [showText, setShowText] = useState(true);

  return (
    
    <div className="textPage">
  
     <main>
      <Button visual = "link" className='main-button'
       onClick ={ () => setShowText(!showText)}
       > Showtext</Button>
       {showText && <Text className ="Page-Text"/>}

    </main>

      </div>

  );
}

export default TextPage;
