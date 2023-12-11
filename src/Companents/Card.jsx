import { Link } from "react-router-dom";
import "./Card.css";
import { useSelector, useDispatch } from "react-redux";
import { addMovie } from "../config/currentListSlice";
import { setCurrentMovie } from "../config/currentMovie";

export default function Card(props) {
  const dispatch = useDispatch();
  const currentList = useSelector((state) => state.currentList);
  function addItem() {
    if (!currentList.disabled) {
      dispatch(
        addMovie({
          Title: props.movie.Title,
          Poster: props.movie.Poster,
          imdbID: props.movie.imdbID,
          Year: props.movie.Year,
        })
      );
    }
  }

  function setMovie() {
    dispatch(setCurrentMovie(props.movie));
  }
  return (
    <div className="Cards">
      {" "}
      <div className="imageWrapper">
        <div className="Card">
          <img src={props.movie.Poster} alt="poster" />
          <div className="aside">
            <h3>{props.movie.Title + " (" + props.movie.Year + ")"}</h3>
            <button onClick={addItem}>Siyahıya əlavə et</button>
            <button onClick={setMovie}>
              <Link to="/details" className="link">
                Təfərrüatlar
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
