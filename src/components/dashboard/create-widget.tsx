import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addWidget } from "../../store/widgetSlice";
import { Close } from "@mui/icons-material";
import Button from "../ui/button";

interface ICreateWidget {
  toggleCreateModal: boolean;
  setToggleCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  categoryId: string | null;
}

const CreateWidget: React.FC<ICreateWidget> = ({
  toggleCreateModal,
  setToggleCreateModal,
  categoryId,
}) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const categories = useSelector((state: RootState) => state.widget.categories);
  useEffect(() => {
    setSelectedCategoryId(categoryId);
  }, [categoryId]);

  const dispatch = useDispatch();
  const handleWidgetAddition = () => {
    if (selectedCategoryId && widgetName && widgetText) {
      const newWidget = {
        id: widgetName,
        name: widgetName,
        text: widgetText,
      };
      dispatch(
        addWidget({
          categoryId: selectedCategoryId,
          widget: newWidget,
        })
      );
      setToggleCreateModal((prev) => !prev);
    } else {
      alert("Please fill out all fields.");
    }
  };
  console.log(selectedCategoryId);
  return (
    <>
      <div
        className={`h-max w-1/2 z-20 bg-white fixed top-1/3 left-1/4 transition-transform duration-500${
          toggleCreateModal ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-[350px] w-full flex flex-col gap-5 p-5 border border-[gray]">
          <div className="flex w-full justify-between">
            <p className="font-bold p-3 bg-[#040468] text-[#fff]">Add Widget</p>
            <Button onClick={setToggleCreateModal}>
              <Close fontSize="small" />
            </Button>
          </div>

          <select
            defaultValue={"Select Category"}
            value={selectedCategoryId || "Select Category"}
            onChange={(e) => {
              console.log(e.target.value);
              return setSelectedCategoryId(e.target.value);
            }}
            className="border border-[gray] p-2 rounded-md bg-[#fff]"
          >
            <option disabled>Select Category</option>
            {categories?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <input
            placeholder="Enter widget name"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            className="border border-[gray] p-2 rounded-md bg-[#fff]"
          />
          <input
            placeholder="Enter widget text"
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
            className="border border-[gray] p-2 rounded-md bg-[#fff]"
          />
        </div>
        <div className="absolute right-2 bottom-2">
          <button
            className="bg-[#01123d] text-[#fff] rounded-md p-2.5 ml-2"
            onClick={handleWidgetAddition}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateWidget;
