
import './Reorder.css'; 

function Reorder({ onReorder }) {
  return (
    <button className="reorder"type="button" onClick={() => onReorder(5)}>Reorder</button>
  );
}

export default Reorder;