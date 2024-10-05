import { useState } from "react";
import DashboardAnalytics from "./dashbaord-analytics";
import DashboardNav from "./dashboard-nav";
import AddWidget from "./add-widget";
import CreateWidget from "./create-widget";

interface DashboardProps {
  searchQuery: string; // searchQuery should be a string
}
const Dashboard: React.FC<DashboardProps> = ({ searchQuery }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [toggleCreateModal, setToggleCreateModal] = useState(false);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  console.log(toggleCreateModal);
  return (
    <section className="flex flex-col overflow-hidden bg-[#ebf1f7] p-10 transition-all">
      {toggleCreateModal && (
        <CreateWidget
          toggleCreateModal={toggleCreateModal}
          setToggleCreateModal={setToggleCreateModal}
          categoryId={categoryId}
        />
      )}

      <AddWidget
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        setToggleCreateModal={setToggleCreateModal}
      />
      <DashboardNav
        setShowSidebar={setShowSidebar}
        setCategoryId={setCategoryId}
      />
      <DashboardAnalytics
        searchQuery={searchQuery}
        setShowSidebar={setShowSidebar}
      />
    </section>
  );
};

export default Dashboard;
