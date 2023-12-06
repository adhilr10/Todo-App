import Button from "./Button";
import { MdDeleteForever } from "react-icons/md";
import { Items, ReactSetState } from "../types/utils";
type ItemList = {
  items: Items[];
  setItems: ReactSetState<Items[]>;
};

const ItemList = ({ items, setItems }: ItemList) => {
  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((data) => data.id !== id));
  };
  return items.map((data) => (
    <div
      className="flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 h-9"
      key={data.id}
    >
      <p>{data.title}</p>
      <Button onClick={() => handleDelete(data.id)}>
        <MdDeleteForever color="red" />
      </Button>
    </div>
  ));
};

export default ItemList;
