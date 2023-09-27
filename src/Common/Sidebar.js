import React from "react";
import { useSelector } from "react-redux";
import { sidebarSelector } from "../Redux/TabsSlice/TabsSlice";
const Sidebar = ({ mainTabs, activeTab, onItemClick }) => {
  const sidebar = useSelector(sidebarSelector);
  return (
    // -left-[145px] left-0
    <nav className={`flex flex-col items-center h-full py-4 mr-2 overflow-x-hidden bg-white shadow-lg transition-all px-2 ease-in-out fixed md:static md:block z-10 ${sidebar ? "-left-[160px] md:left-0" : "left-0 md:left-0"}`}>

      <ul className={`self-start  text-base space-y-1 transition-all duration-300 ease-in-out ${sidebar ? "md:w-[140px] md:left-0 w-[140px]" : "md:w-[40px] w-[140px]  md:left-0"} z-10   md:bg-white    `}   >
        {mainTabs.map(({ key, title, name, right }) => (
          <SidebarItem
            text={title}
            sidebar={sidebar}
            key={key}
            selectedTab={key}
            activeTab={activeTab}
            name={name}
            right={right}
            onItemClick={onItemClick}
          />
        ))}

      </ul>
    </nav>
  );
};
export default Sidebar;


const SidebarItem = ({ selectedTab, text, name, sidebar, right, activeTab, onItemClick }) => {
  return (
    <li onClick={() => onItemClick(selectedTab, name, right, text)} className={`flex ${activeTab === selectedTab && "text-primaryColor "} transition-all font-semibold ease-in-out duration-200 cursor-pointer hover:text-white px-4 py-2 hover:bg-primaryColor items-center ${!sidebar ? "mx-auto md:w-fit w-full" : "w-full"}`}>

      {sidebar ? <span className="block md:inline-block">{text}</span> : <span className="block ml-3 md:hidden">{text}</span>}
    </li>
  );
};
