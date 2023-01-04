import CardMovie from "./CardMovie"

const ListMovies=({movies,setMovies,titre,etoile})=>{
    const x =  movies.filter(el=> el.title.toUpperCase().includes(titre.toUpperCase()) && el.rating>=etoile).map(el=> <CardMovie el={el} movies={movies} setMovies={setMovies}/>)
    return(
        <div className="test">
            {              
                 x.length === 0 ? <img src="/error.jpg" style={{height:'500px'}} alt=""/> : x          
             
            }
        </div>
    )
}

export default ListMovies