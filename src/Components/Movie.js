import { Link, useParams } from "react-router-dom"


const Movie=({movies})=>{
    const {id} = useParams()
    const found = movies.find(el=> el.id === id)
    console.log(found)
   
    return(
        <div>
            <h3>{found.description}</h3>
            <h4>{found.posterURL}</h4>
            <a><Link to='/'>Return Home</Link></a>
        </div>
    )
}

export default Movie