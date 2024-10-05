// import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import WidgetContainer from "./widget-container";

interface DashboardAnalyticsProps {
  searchQuery: string; // searchQuery should be a string
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}
const DashboardAnalytics: React.FC<DashboardAnalyticsProps> = ({
  searchQuery,
  setShowSidebar,
}) => {
  // const [toggleSidebar, setToggleSidebar] = useState(false);
  const categories = useSelector((state: RootState) => state.widget.categories);
  const filteredCategories = categories
    .map((category) => ({
      ...category,
      widgets: category.widgets.filter((widget) =>
        widget.name.toLowerCase().includes(searchQuery?.toLowerCase())
      ),
    }))
    .filter((category) => category.widgets.length > 0);
  console.log(searchQuery);
  if (searchQuery.length > 0) {
    return (
      <section className="w-full">
        {filteredCategories.length > 0 ? (
          filteredCategories.map(({ id, name, widgets }) => (
            <div key={id} className="flex flex-col mb-5 px-10">
              <WidgetContainer
                category={{ id, name, widgets }}
                setShowSidebar={setShowSidebar}
              />
            </div>
          ))
        ) : (
          <div className="w-full flex flex-col items-center gap-5 p-1.5">
            No widget found
          </div>
        )}
      </section>
    );
  } else {
    return (
      <section className="w-full">
        {
          <div className="w-full flex flex-col gap-5 p-1.5">
            {categories.map(({ id, name, widgets }) => (
              <WidgetContainer
                category={{ id, name, widgets }}
                setShowSidebar={setShowSidebar}
              />
            ))}
          </div>
        }
      </section>
    );
  }
};

export default DashboardAnalytics;
