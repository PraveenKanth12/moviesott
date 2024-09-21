import "./MovieList.css"
const MovieList=(props)=>{
    const FavouriteCompo=props.favouriteComponent
    return(
        <div className="flexing">
        {props.movies.map((movie,index)=>(
                <div className="image-container d-flex justify-content-start m3" key={index}>
                <img src={movie.Poster} alt="movie"/>
                <div onClick={()=>props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                    <FavouriteCompo/>
                </div>
                </div>
        ))
        }
        </div>
    )
}

export default MovieList