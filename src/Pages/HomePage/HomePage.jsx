import React, { lazy, useEffect, useState, Suspense } from 'react'
import Sidebar from './../../Common/Sidebar';
import { TabContent, TabPane } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import MainTabsObj from "./MainTabsObj"
import { activeSubTab, mainTabsSelector } from '../../Redux/TabsSlice/TabsSlice';
const Dashboard = lazy(() => import(   /* webpackChunkName: "Dashboard" */ "../../MainTabs/Dashboard/Dashboard"));
const Billing = lazy(() => import(/* webpackChunkName: "Billing" */ "../../MainTabs/Billing/Billing"));
const Scheduler = lazy(() => import(/* webpackChunkName: "Scheduler" */ "../../MainTabs/Scheduler/Scheduler"));


const HomePage = () => {
    const MainTabItems = MainTabsObj()
    // const { mainTabs } = useSelector((state) => state.tabs);
    const mainTabs = useSelector(mainTabsSelector);

    const dispatch = useDispatch()
    const [activeTab, setActiveTab] = useState(null)
    const [tabsmodal, settabsmodal] = useState({
        dashboard: true,
        billing: false,
        scheduler: false
    });
    const handleMenuItemClick = (key, name) => {
        dispatch(activeSubTab({ tabName: "mainTabs", key, name }))
    }


    useEffect(() => {
        console.log("useEffect mainTabs", mainTabs);
        const workingTab = mainTabs.find((tab) => tab.active)
        settabsmodal((prevtab) => ({
            ...prevtab,
            [workingTab.name]: true,
        }));
        setActiveTab(workingTab.key)
    }, [mainTabs])
    console.log(" render mainTabs");

    return (
        <div className="relative z-10 flex h-full">
            <Sidebar mainTabs={MainTabItems} activeTab={activeTab} onItemClick={handleMenuItemClick} />

            <div className='w-full mt-2 mr-2 overflow-auto bg-white shadow-xl rounded-xl'>
                {<TabContent activeTab={activeTab}>
                    <Suspense fallback={<div>Loading...</div>}>
                        {tabsmodal.dashboard === true && <TabPane id={1} tabId={1}><Dashboard /></TabPane>}
                        {tabsmodal.billing === true && <TabPane id={2} tabId={2}><Billing /></TabPane>}
                        {tabsmodal.scheduler === true && <TabPane id={3} tabId={3}><Scheduler /></TabPane>}
                    </Suspense>
                </TabContent>}
            </div>


        </div>
    )
}

export default HomePage