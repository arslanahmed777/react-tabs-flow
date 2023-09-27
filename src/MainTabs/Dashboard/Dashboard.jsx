import React, { Suspense, lazy, useEffect, useState } from 'react'
import DashboardSubtabsObj from "./DashboardSubtabsObj"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { activeSubTab, dashboardTabsSelector } from '../../Redux/TabsSlice/TabsSlice';
import { TabContent, TabPane } from 'reactstrap';

const Marketing = lazy(() => import(   /* webpackChunkName: "Marketing" */ "./Marketing/Marketing"));
const Finance = lazy(() => import(/* webpackChunkName: "Finance" */ "./Finance/Finance"));

const Dashboard = () => {
  const DashboardSubTabItems = DashboardSubtabsObj()
  const dashboardTabs = useSelector(dashboardTabsSelector);
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState(11)
  const [tabsmodal, settabsmodal] = useState({
    marketing: true,
    finance: false,
  });


  const onchangePatient = (key, name) => {
    dispatch(activeSubTab({ tabName: "dashboardTabs", key, name }))
  }
  const closePatient = () => {

  }
  useEffect(() => {
    const workingTab = dashboardTabs.find((tab) => tab.active)
    settabsmodal((prevtab) => ({
      ...prevtab,
      [workingTab.name]: true,
    }));
    setActiveTab(workingTab.key)
  }, [dashboardTabs])
  console.log("Dashboard");
  return (
    <div>
      <ul className="flex items-center gap-2 text-sm font-medium" style={{ height: "50px" }}>
        {DashboardSubTabItems.map(({ key, name }) => {
          return (
            <li key={key} onClick={() => onchangePatient(key, name)} className="cursor-pointer"    >
              <span className={`relative flex items-center justify-center gap-2 rounded-lg  px-5 py-2 ${key === activeTab ? "bg-primaryColor text-white" : "text-gray-700 bg-gray-200 hover:bg-primaryColor/20"}`}  >
                {name} <AiOutlineCloseCircle onClick={(e) => closePatient(e, key)} className="ml-1 text-xl" />{" "}
              </span>
            </li>
          );

        })}
      </ul>
      {<TabContent activeTab={activeTab}>
        <Suspense fallback={<div>Loading...</div>}>
          {tabsmodal.marketing === true && <TabPane id={11} tabId={11}><Marketing /></TabPane>}
          {tabsmodal.finance === true && <TabPane id={12} tabId={12}><Finance /></TabPane>}
        </Suspense>
      </TabContent>}
    </div>
  )
}

export default Dashboard