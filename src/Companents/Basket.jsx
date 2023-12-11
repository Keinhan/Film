import { useSelector } from "react-redux";
import BasketList from "./BasketList";
import "./Basket.css";

export default function Basket() {
  const favLists = useSelector((state) => state.fovariteLists.lists);
  return (
    <div className="Basket">
      {favLists.map((item, ind) => (
        <BasketList key={ind} list={item} />
      ))}
    </div>
  );
}
