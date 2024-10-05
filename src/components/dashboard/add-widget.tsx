import { useState } from "react";
import EditWidgets from "./edit-widgets";
import { useSelector } from "react-redux";
import { Close } from "@mui/icons-material";
import { RootState } from "../../store/store";
import Button from "../ui/button";

interface IAddWidget {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddWidget: React.FC<IAddWidget> = ({
  showSidebar,
  setShowSidebar,
  setToggleCreateModal,
}) => {
  const [active, setActive] = useState("CSPM");
  const categories = useSelector((state: RootState) => state.widget.categories);
  const options: string[] = ["CSPM", "CWPP", "Registry"];

  return (
    <>
      <div
        className={`h-svh w-1/2 z-10 bg-white fixed top-0 right-0 transition-transform duration-500 ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-[#250182] text-white p-3 pl-5 flex justify-between">
          <div className="flex items-center text-lg">Add Widget</div>
          <div
            className="cursor-pointer mb-2"
            onClick={() => setShowSidebar(false)}
          >
            <Close fontSize="small" />
          </div>
        </div>
        <div className="flex w-full justify-between pr-2 pt-2">
          <h3 className="p-5 py-4">
            Personalise your Dashboard by adding the following Widget
          </h3>
          <Button onClick={setToggleCreateModal}>
            <p>Create New Widget</p>
          </Button>
        </div>

        <div className="flex gap-10 px-10 border-b-2 max-w-max">
          {options.map((option) => (
            <div
              onClick={() => setActive(option)}
              className={`hover:border-b-2 border-[#2e216e] cursor-pointer pb-4 ${
                active === option ? "border-b-2" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>

        {categories.map(
          (category) =>
            active === category.name.split(" ")[0] &&
            category.widgets.map((widget) => (
              <EditWidgets
                key={widget.id}
                widget={widget}
                categoryId={category.id}
              />
            ))
        )}
      </div>
    </>
  );
};

export default AddWidget;
