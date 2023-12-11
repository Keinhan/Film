import { useState } from "react";
import "./BasketList.css";

export default function BasketList(props) {
  const [more, setMore] = useState(true);

  let movieLists = more ? props.list.movies : [];

  function moreButton() {
    setMore(!more);
  }

  return (
    <div className="BasketList">
      <div className="header">
        <h2>{props.list.name}</h2>
        <button onClick={moreButton}>{more ? "Show Less" : "Show More"}</button>
      </div>
      <div className="list">
        {movieLists.map((item) => (
          <div className="list-item" key={item.imdbID}>
            <img src={item.Poster} alt="poster" />
            <p>{item.Title + " (" + item.Year + ")"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
