import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './ngoCard.css'

function NgoCard({ data }) {
  const navigate = useNavigate()
  const handleCard = ()=>{
    navigate('/ngo/details')
  }
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={data.url} height="200rem"/>
      <div class="line"></div>
      <Card.Body>
        <Card.Title class="ngotitle">{data.ngoName}</Card.Title>
        <Card.Text>
          <blockquote className="blockquote mb-0">
            <p class="ngodata">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <div >
              <h5 class="ngodataloc">Location:</h5>
              <label class="ngodataloc">{data.Location}</label>
            </div>
          </blockquote>
        </Card.Text>
        <button className='card_btn' onClick={handleCard}>Check Details</button>
      </Card.Body>
    </Card>
  );
}

export default NgoCard;