import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { currentMovie } from '../features/movieInfo'

export const Card = ({ movie }) => {
  const dispatch = useDispatch()
  const Movie = { 
    name: movie.name? movie.name : "",
    language: movie.language? movie.language : "",
    ganres: movie.ganres? movie.ganre:[],
    premiered: movie.premiered? movie.premiered: "",
    officialSite: movie.officialSite? movie.officialSite:"",
    rating: movie.rating? movie.rating : "",
    network: movie.network? movie.network :{},
    image:movie.image?  movie.image:{},
    summary:movie.summary? movie.summary : ""}
  return (

    <div >
      <Link to='/summary'>
        <button onClick={()=>{dispatch(currentMovie(Movie))}} className=" cursor-pointer text-white bg-slate-800 w-52 h-96 m-10 rounded-md hover:bg-yellow-500 hover:text-black active:bg-yellow-500 active:text-black">
          <img className=" p-4 " src={movie.image?.medium != undefined ? movie.image.medium : "https://via.placeholder.com/360x480"} alt="" />
          <p className=" p-1 text-center">{movie['name']}</p>
          <p className=" text-center text-sm">{movie['language']}</p>
          <p className=" text-center text-sm">{movie['premiered']}</p>
          {/* <p className=" text-white">{movie.image?.medium}</p> */}
        </button>
      </Link>
    </div>

  )
}