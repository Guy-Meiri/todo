import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import AddItemForm from "./components/AddItem/AddItemForm";
import { ItemInterface } from "./components/Item/Item";
import List from "./components/List/List";

const ITEMS_LOCAL_STORAGE_KEY = "todo_items";
function App() {
  const [items, setItems] = useState<Array<ItemInterface>>([]);

  const addItemHandler = (name: string, time: string) => {
    const id = uuidv4();
    if (!name || !time) return null;

    setItems((prevItems: any) => {
      return [
        ...prevItems,
        { text: name, time: new Date(time).toLocaleDateString(), id },
      ];
    });
  };

  useEffect(() => {
    const itemsFromStorage: any = JSON.parse(
      localStorage.getItem(ITEMS_LOCAL_STORAGE_KEY) || "[]"
    );
    if (itemsFromStorage?.length > 0) setItems(itemsFromStorage);
  }, []);

  useEffect(() => {
    if (items.length > 0)
      localStorage.setItem(ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  return (
    <div className="App">
      <List items={items} setItems={setItems}></List>
      <AddItemForm onAddItem={addItemHandler}></AddItemForm>
    </div>
  );
}

export default App;
