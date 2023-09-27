import { FaFileMedical, } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";


const MainTabsObj = () => {
  return [
    {
      key: 1,
      title: "Dashboard",
      name: "dashboard",
      right: true,
      active: true
    },

    {
      key: 2,
      title: "Billing",
      name: "billing",
      right: true,
      active: false
    },

  ];
};

export default MainTabsObj;
