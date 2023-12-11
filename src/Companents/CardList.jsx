import "./CardList.css";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function CardList() {
  const [searchKey, setSearchKey] = useState("harry potter");
  // const [searchKey, setSearchKey] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?s=${searchKey
        .split(" ")
        .join("%20")}&apikey=7588297f`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.Error) {
          setList(data.Search);
        }
      });
  }, [searchKey]);
  function search() {
    setSearchKey(document.querySelector(".CardList input").value);
  }

  return (
    <div>
      {" "}
      <div className="search">
        <input type="text" />
        <button onClick={search}>Axtar</button>
      </div>
      <div className="CardList">
        {list.map((item, ind) => (
          <Card key={ind} movie={item} />
        ))}
      </div>
    </div>
  );
}
