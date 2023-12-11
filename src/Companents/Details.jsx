import './Details.css'
import { useSelector } from "react-redux";

export default function Details() {
    const movie = useSelector(state => state.currentMovie.movie)
    function goToTrailer() {
        window.location.replace(`https://www.imdb.com/title/${movie.imdbID}/?ref_=ttls_li_tt`)
    }
    return (
        <div className="Details">
            <h1>{movie.Title + " (" + movie.Year + ")"}</h1>
            <img src={movie.Poster} alt="poster" />
            <button onClick={goToTrailer}>Treyler</button>
        </div>
    )
}
