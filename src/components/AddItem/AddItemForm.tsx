import React, { useRef } from "react";

interface AddItemProps {
  onAddItem: (name: string, time: string) => void;
}

export default function AddItemForm({ onAddItem }: AddItemProps) {
  const newItemNameRef: any = useRef();
  const newItemTimeRef: any = useRef();
  return (
    <div className="new-item-container">
      <div className="inputGroup">
        <label>Name</label>
        <input
          type="name"
          name="name"
          ref={newItemNameRef}
          placeholder="add new item name here"
        />
      </div>
      <div className="inputGroup">
        <label>Time</label>
        <input
          type="date"
          id="start"
          min="2022-07-01"
          max="2024-12-31"
          ref={newItemTimeRef}
        ></input>
      </div>
      <button
        onClick={() => {
          onAddItem(newItemNameRef.current.value, newItemTimeRef.current.value);
        }}
      >
        add item
      </button>
    </div>
  );
}
