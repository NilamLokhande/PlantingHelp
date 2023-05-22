import Card from 'react-bootstrap/Card';
import './treeCard.css'

function TreesCard({ data, setSelectedTrees, selectedTrees }) {
  const handleTrees = () => {
    setSelectedTrees([...selectedTrees, data])
  }
  return (
    <Card>
      <Card.Img variant="top" src={data.url} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <button className='tree_btn' onClick={() => handleTrees(data.id)}>Select</button>
      </Card.Body>
    </Card>
  );
}

export default TreesCard;