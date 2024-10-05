import Button from "../ui/button";
import AddIcon from "@mui/icons-material/Add";
import SyncIcon from "@mui/icons-material/Sync";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ReactElement } from "react";

interface IDashboardNav {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  setCategoryId: React.Dispatch<React.SetStateAction<string | null>>;
}
type TDASHBOARD_BUTTON = {
  preTextLogo: ReactElement<any, any> | null;
  text: string;
  postTextLogo: ReactElement<any, any>;
  themeColor: string;
  clickAction?: React.Dispatch<React.SetStateAction<boolean>>;
}[];
const DashboardNav: React.FC<IDashboardNav> = ({
  setShowSidebar,
  setCategoryId,
}) => {
  const DASHBOARD_BUTTON: TDASHBOARD_BUTTON = [
    {
      preTextLogo: null,
      text: "Create widget",
      postTextLogo: <AddIcon className="ml-2" fontSize="small" />,
      themeColor: "",
      clickAction: setShowSidebar,
    },
    {
      preTextLogo: null,
      text: "",
      postTextLogo: <SyncIcon fontSize="small" />,
      themeColor: "",
    },
    {
      preTextLogo: null,
      text: "",
      postTextLogo: <MoreVertIcon fontSize="small" />,
      themeColor: "",
    },
    {
      preTextLogo: (
        <WatchLaterIcon className="mr-2 border-solid border-r-2 border-[#2e216e]" />
      ),
      text: "Last 2 days",
      postTextLogo: <KeyboardArrowDownIcon className="ml-2" fontSize="small" />,
      themeColor: "#2e216e",
    },
  ];
  return (
    <div className="flex w-full justify-between items-center mb-2">
      <p className="text-xl font-extrabold">CNAPP Dashboard</p>
      <div className="flex gap-4">
        {DASHBOARD_BUTTON.map(
          ({ preTextLogo, text, postTextLogo, themeColor, clickAction }) => (
            <Button
              themeColor={themeColor}
              borderColor={""}
              onClick={clickAction}
              setCategoryId={setCategoryId}
            >
              {preTextLogo}
              <p className={`${themeColor && "text-[#2e216e]"}`}>{text}</p>
              {postTextLogo}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default DashboardNav;
