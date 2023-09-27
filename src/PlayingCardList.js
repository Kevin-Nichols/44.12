import React from "react";
import { useAxios } from "./hooks";
import { assignCardData } from "./helpers";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard, resetCards] = useAxios(
    "cards",
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard(assignCardData)}>Add a playing card!</button>
        <button onClick={resetCards}>Reset playing cards!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(card => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
