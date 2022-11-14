import App from './../App';
import { Routes,Route } from 'react-router-dom';
import Vidd from './Vidd';
import { useState } from 'react';
import { data } from './../data';



const RouterComp = ()=>{
    const [dataMovie, setDataMovie] = useState(data); 
    return(
        <div>
        <Routes>

        <Route path='/' element={<App dataMovie={dataMovie} setDataMovie={setDataMovie}/>} />
        <Route path='/MovieList/:idd' element={<Vidd dataMovie={dataMovie}/>} />
      </Routes>
        </div>
    )
}

export default RouterComp