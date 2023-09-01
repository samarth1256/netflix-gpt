
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryConstainer from './SecondaryConstainer';


const Browse = () => {
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearchView)
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header/>
      {showGptSearch?(<GptSearch/>):(<><MainContainer/>
      <SecondaryConstainer/></>)}
      
      
    </div>
  )
}

export default Browse
