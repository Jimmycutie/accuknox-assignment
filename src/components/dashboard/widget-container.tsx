import { useDispatch } from "react-redux";
import { ICategory, toggleWidgetFlag } from "../../store/widgetSlice";
import Widget from "./widget";

interface WidgetContainerProps {
  category: ICategory;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}
const WidgetContainer: React.FC<WidgetContainerProps> = ({
  category,
  setShowSidebar,
}) => {
  const { id, name, widgets } = category;
  const dispatch = useDispatch();

  const handleDeleteWidget = (
    categoryId: string,
    widgetId: string,
    flag: boolean
  ) => {
    console.log("ran");
    dispatch(toggleWidgetFlag({ categoryId, widgetId, flag }));
  };

  return (
    <div key={id} className="w-full flex flex-col">
      <p className="font-bold text-[#000]">{name}</p>
      <div className="flex w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {widgets.map((widget, index) => (
          <>
            {widget.flag && (
              <Widget
                type={"data"}
                widget={widget}
                onDelete={(widgetId) =>
                  handleDeleteWidget(category.id, widgetId, false)
                }
              />
            )}
            {widgets && widgets.length - 1 == index && (
              <Widget
                type={"add"}
                widget={widget}
                setShowSidebar={setShowSidebar}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default WidgetContainer;
