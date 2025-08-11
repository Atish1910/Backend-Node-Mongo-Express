import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useEffect, useState } from "react";
import { addItemToServer, deleteItem, getItemsFromServer } from "./services/itemsService";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = async (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    
    const item = await addItemToServer(itemName, itemDueDate);
    const newTodoItems = [
      ...todoItems,
      item,
    ];
    setTodoItems(newTodoItems);
  };

  useEffect(() => {
    getItemsFromServer().then((initialValue) => {
      setTodoItems(initialValue);
    })
  },[]);

  const handleDeleteItem = async (id) => {
    const deletedId = await deleteItem(id);
    const newTodoItems = todoItems.filter((item) => item.id !== deletedId);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
