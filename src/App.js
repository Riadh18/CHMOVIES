import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddMovie from './Components/AddMovie';
import ListMovies from './Components/ListMovies';
import NavMovies from './Components/NavMovies';
import Movie from './Components/Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';

function App() {
  const [movies,setMovies] = useState(
    [
      {title : 'Fast & Furious Presents: Hobbs & Shaw',
       description :"The plot follows the unlikely pairing of the titular characters as they team up with Shaw's sister (Kirby) to battle a cybernetically enhanced terrorist (Elba) threatening the world, with a deadly virus.",posterURL:'https://upload.wikimedia.org/wikipedia/en/0/00/Fast_%26_Furious_Presents_Hobbs_%26_Shaw_-_theatrical_poster.jpg',rating : 3, id : Math.random(),
       Trailer : <iframe width="560" height="315" src="https://www.youtube.com/embed/HZ7PAyCDwEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>},
      {title : 'Baby Driver', 
      description :'After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail. Baby is a young and partially hearing impaired getaway driver who can make any wild move while in motion with the right track playing.',posterURL:'https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_UY1200_CR90,0,630,1200_AL_.jpg',rating : 5, id : Math.random(),
      Trailer:<iframe width="560" height="315" src="https://www.youtube.com/embed/D9YZw_X5UzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>},
      {title : 'Arcane',
       description :'Premise. Amidst the escalating unrest between the rich, utopian city of Piltover and its seedy, oppressed underbelly of Zaun, sisters Vi and Jinx find themselves on opposing sides of a brewing conflict over clashing convictions and arcane technologies.',posterURL:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTxqxBh-2dnbTqCuj0n_Qx5G3IQ5r6maT6s53nfIRVNMpR0bf1N',rating : 5, id : Math.random(),
       Trialer : <iframe width="560" height="315" src="https://www.youtube.com/embed/fXmAurh012s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>},

      {title : 'Vikings: Valhalla',
       description:'The Vikings were tradesmen, farmers, seafarers, traders, and warriors from the Nordic countries during the Viking Era, which lasted from approximately 800 CE to 1050 CE. Vikings embarked on expeditions to other parts of Europe and beyond to trade and form new settlements, but also to plunder.',posterURL:'https://m.media-amazon.com/images/I/51oy3YpGJ5L._AC_SY580_.jpg', rating:2,id:Math.random(),
       Trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/9GgxinPwAGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>},
  
    ]
  )
  const [titre,setTitre] = useState('')
  const [etoile,setEtoile] = useState(0)

  return (
   <div>
        <NavMovies/>
        
        <AddMovie movies={movies} setMovies={setMovies}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/list' element={<ListMovies movies={movies} setMovies={setMovies} titre={titre} etoile={etoile} setTitre={setTitre} setEtoile={setEtoile}/>}/>
          <Route path='/movie/:id' element={<Movie movies={movies}/>}/>
        </Routes>
   </div>
  );
}

export default App;