import { Add } from "@mui/icons-material";
import Button from "../ui/button";
import { IWidget } from "../../store/widgetSlice";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface WidgetProps {
  widget: IWidget;
  type: string;
  onDelete?: (widgetId: string) => void;
  setShowSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
}
const Widget: React.FC<WidgetProps> = ({
  widget,
  type,
  onDelete,
  setShowSidebar,
}) => {
  const { id, name, text } = widget;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      key={id}
      className="flex rounded-xl overflow-hidden bg-[#fff] p-5 border-none my-3 mx-1 h-60 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && type === "data" && (
        <div
          onClick={() => (onDelete ? onDelete(widget.id) : null)}
          className="absolute top-2 right-2 cursor-pointer"
        >
          <CloseIcon fontSize={"small"} />
        </div>
      )}
      <>
        {type === "add" ? (
          <div className="flex w-full h-full items-center justify-center">
            <Button onClick={setShowSidebar}>
              <Add />
              <p>Add widget</p>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex flex-col w-full h-full">
              <p className="font-bold text-[#000]">{name}</p>
              <p>{text}</p>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default Widget;
