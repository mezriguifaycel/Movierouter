import { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {data} from './data'
import Filtre from './Components/Filtre';
import Vidd from './Components/Vidd';
import { Routes, Route } from "react-router-dom";

function App({dataMovie,setDataMovie}) {

 /*  declaration */ 

      /* => movie liste  donner les valeurs data */
const [search, setSearch] = useState('');                /*espace de recherche donner la valeur de recherche */
const [rate, setRate] = useState(0);                      /*rate recherche donner la valeur rating*/

const AddingMovie = (ajout)=>{setDataMovie([...dataMovie, ajout])} 
/* l'ajout du movie  (lorsque on ajoute du nouvel movie on va ecrase le'acien et remplacer par le nouveaux)*/

  return (
    <div className="App">
       <div style={{display:'flex', justifyContent:'space-between',margin:'20px'}}> 
     
      <AddMovie AddingMovie={AddingMovie}/>
      <Filtre setSearch={setSearch} setRate={setRate} />
      </div>
    
     <MovieList dataMovie={dataMovie.filter(movie=> movie.title.toLocaleLowerCase().includes(search.trim().toLowerCase()) && movie.rating >= rate)}  />
    
    </div>
  );
}

export default App;
