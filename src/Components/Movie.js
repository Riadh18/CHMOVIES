import {useParams } from "react-router-dom"


const Movie=({movies})=>{
    
    const {id} = useParams()
    
    const found = movies.find(el=> el.id === Number(id))
   
   
    return(
        <div>
            <h1>{found.title}</h1>
            <h2>Trailer :</h2>
            <h1>{found.Trailer}</h1>

    
           
        </div>
    )
}

export default Movie