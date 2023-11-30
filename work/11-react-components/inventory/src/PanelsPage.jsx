import Text from './TextPageText'
import './PanelsPage.css'
import Modal from './Modal';
import React from 'react';
import{ useState} from 'react';
function PanelsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here
      handleCloseModal();
    };

    return (

      <div className="PanelsPage">
    
      
       <img 
          src="http://placekitten.com/200/200?image=9"
          className = "Panelpic"
          alt="CatImage"
          />
       <Text className='Text-area'/>

       <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
  
        </div>
        
  
    );
  }
  
  export default  PanelsPage;
  