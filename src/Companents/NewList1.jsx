import { useSelector, useDispatch } from "react-redux";
import { addList } from "../config/favoriteLists";
import {
  removeMovie,
  changeName,
  reset,
  disable,
} from "../config/currentListSlice";
import "./NewList.css";
import { Link } from "react-router-dom";

export default function NewList1() {
  const list = useSelector((state) => state.currentList);
  const dispatch = useDispatch();

  function inputChange(e) {
    dispatch(changeName(e.target.value));
  }

  function remove(e) {
    dispatch(removeMovie({ imdbID: e.target.id }));
  }

  function save() {
    if (!list.name.trim() || list.movies.length === 0) {
      dispatch(disable());
      alert("Siyahi boşdur!");
    } else {
      dispatch(addList(list));
      dispatch(disable());
    }
  }

  function resetButton() {
    dispatch(reset());
  }

  return (
    <div className="NewList1">
      <input
        type="text"
        value={list.name}
        disabled={list.disabled}
        onChange={inputChange}
      />
      <div className="list">
        {list.movies.map((item) => (
          <div className="list-item" key={item.imdbID}>
            <p>{item.Title + " (" + item.Year + ")"}</p>
            <button onClick={remove} id={item.imdbID} disabled={list.disabled}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button disabled={list.disabled} onClick={save}>
          Save
        </button>
        <button>
          <Link to="/basket" className="link">
            Go to Favorites
          </Link>
        </button>
        <button onClick={resetButton}>Sıfırla</button>
      </div>
    </div>
  );
}
