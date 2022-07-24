import React from "react";
import Item, { ItemInterface, ItemProps } from "../Item/Item";
import "./List.css";

interface ListProps {
  items: Array<ItemInterface>;
  setItems: React.Dispatch<React.SetStateAction<ItemInterface[]>>;
  children?: React.ReactNode;
}

const List: React.FC<ListProps> = ({ items, setItems }) => {
  const onDelete = (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <>
      <div className="list-container">
        <h4>Items:</h4>
        {items.map((item, ind) => (
          <Item
            key={ind}
            item={{ text: item.text, time: item.time, id: item.id }}
            onDelete={onDelete}
          ></Item>
        ))}
      </div>
    </>
  );
};

export default List;
