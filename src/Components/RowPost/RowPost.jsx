import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios';
import {imageUrl,API_KEY} from '../../Constants/Contants'
import YouTube from 'react-youtube';

const RowPost = (propes) => {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

   const [urlId, setUrlId] = useState('');
  const handleMovieTrailer=(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    
      if(response.data.results.length!==0){
        console.log("its work");
        console.log(response.data.results);
        setUrlId(response.data.results[0])
      }else{
        console.log("trailer not available");
      }
    })
  }
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(propes.url).then((responese)=>{
      setMovies(responese.data.results)
    }).catch(error=>console.log(error))
  }, []);
  return (

    
    <div className='row'>
            <h2>{propes.title}</h2>
            <div className='posters'>

               {
                movies.map((movie)=>
                <img onClick={()=>handleMovieTrailer(movie.id)} className={propes.isSmall ? 'smallPoster':'poster'} alt='poster' src={`${imageUrl+movie.backdrop_path}`} />
                )
               }

               
         
            </div>

            {
              urlId&&<YouTube videoId={urlId.key} opts={opts}  />
            }
        </div>
  )
}

export default RowPost
