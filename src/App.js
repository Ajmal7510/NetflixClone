
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import { action,orginals,comadyMovies,horrorMovies,romanceMovies,documentaries } from './urls';
import{useReducer}from 'react'

function App() {
  
  return (
   <>
   <NavBar/>
   <Banner/>
   <RowPost url={orginals} title='Netflix Originals' />
   <RowPost url={action} title='Action' isSmall />
   <RowPost url={comadyMovies} title='Comady Movies' isSmall  />
   <RowPost url={horrorMovies} title='Horror Movies' isSmall  />
   <RowPost url={romanceMovies} title='Romance Movies' isSmall  />
   <RowPost url={documentaries} title='Documentaries' isSmall  />
   </>
   
  
  );
}

export default App;
