import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import ItemList from "./components/ItemList";
import { type Items } from "./types/utils";

function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setItems((prev) => [
      ...prev,
      { title: inputValue, id: Date.now().toString() },
    ]);
    setInputValue("");
  };
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="mb-8">
        <h1 className="text-3xl font-serif">Todo App</h1>
      </div>
      <div className="w-[350px]">
        <form className="mb-5" onSubmit={handleSubmit}>
          <Input inputValue={inputValue} setInputValue={setInputValue} />
          <Button className="bg-gray-700 w-full p-2">ADD</Button>
        </form>

        <div className="h-52 overflow-y-auto ">
          <ItemList items={items} setItems={setItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
