import React from "react";
import "./Item.css";

export interface ItemInterface {
  text: string;
  time: string;
  id: string;
}

export interface ItemProps {
  item: ItemInterface;
  onDelete: (id: string) => void;
}

const Item = ({ item, onDelete }: ItemProps) => {
  const { text, time, id } = item;
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="item-container">
      <div className="item-content">
        <div>{text}</div>
        <div>{time}</div>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Item;
