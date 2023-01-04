import {Card,Button} from 'react-bootstrap'
import Rating from '@mui/material/Rating'
import { useState } from 'react';

const CardMovie=({el,movies,setMovies})=>{
    const handleDelete=(a)=> setMovies(movies.filter(el=> el.id !== a))
    const [showMore, setShowMore] = useState(false);
    return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.posterURL} style={{width :'286px',height:'406px'}} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
        {showMore ? el.description : `${el.description.substring(0, 100)}`}
       <button onClick={()=> setShowMore(!showMore)} className="btn">{showMore ? 'Show Less' : 'Show More'}</button>
          
        
          <br/>
          <Rating name="read-only" value={el.rating} readOnly />
  
        </Card.Text>
        <Button variant="outline-danger" onClick={()=> handleDelete(el.id)}>Delete</Button>

      </Card.Body>
    </Card>
    )
}

export default CardMovie