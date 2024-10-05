import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type Props = {
  searchQuery: string;
  onSearch: (query: string) => void;
};
const Navbar: React.FC<Props> = ({ searchQuery, onSearch }) => {
  const NAVIGATION_OPTIONS: { title: string; link: string }[] = [
    { title: "Home", link: "/" },
    { title: "Dashboard V2", link: "/dashboard" },
  ];
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };
  return (
    <section className="flex justify-between items-center w-full px-10 py-3 text-sm">
      <div className="flex gap-2">
        {NAVIGATION_OPTIONS.map(({ title, link }, index) => (
          <>
            <NavLink
              to={link}
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-[#2d5675]" : "text-[#bdbdbd]"}`
              }
            >
              {title}
            </NavLink>
            {index < NAVIGATION_OPTIONS.length - 1 && (
              <p className="text-[#bdbdbd] font-semibold">&gt;</p>
            )}
          </>
        ))}
      </div>
      <div className="flex gap-5 items-center">
        <div className="relative">
          <SearchIcon className="text-[#93b5cf] absolute top-1 left-1" />
          <input
            placeholder="Search anything..."
            className="border border-2 border-[#dceaf5] bg-[#ebf1f7] text-sm rounded-md p-1 pl-8 w-96"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="flex gap-10">
          <span className="flex">
            <p>Username</p>
            <KeyboardArrowDownIcon className="text-[#666666]" />
          </span>
          <NotificationsActiveOutlinedIcon className="text-[#bfd2e0]" />

          <span className="flex items-center gap-2">
            <AccountCircleIcon className="text-[#bfd2e0]" />
            <p>Blurred options</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
