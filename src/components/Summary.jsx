import { useSelector } from 'react-redux'

export default function Summary() {
    const movieInfo = useSelector((state)=> state.movieInfo.value)
    
    console.log(movieInfo)
    return (
        <div className=' text-white  flex bg-slate-950'>
            <img className=" p-8 h-80" src={movieInfo.image?.medium != undefined ? movieInfo.image.medium : "https://via.placeholder.com/360x480"} alt="" />
            <div className='flex-row'>
            <p>{movieInfo.name}</p>
            <p>{movieInfo.language}</p>
            {/* <p>{movieInfo.ganre}</p> */}
            <p>{movieInfo.premiered}</p>
            <p><a href={movieInfo.officialSite}>Official Website</a></p>

        
            </div>
        </div>
    )
}
