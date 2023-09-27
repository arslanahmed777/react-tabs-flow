

import React, { Suspense, lazy, useEffect, useState } from 'react'
import MarketingTabsObj from "./MarketingTabsObj"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { TabContent, TabPane } from 'reactstrap';
import { activeSubTab, marketingTabsSelector } from '../../../Redux/TabsSlice/TabsSlice';

const Affliate = lazy(() => import(   /* webpackChunkName: "Affliate" */ "./Affliate/Affliate"));
const Influencer = lazy(() => import(/* webpackChunkName: "Influencer" */ "./Influencer/Influencer"));

const Marketing = () => {
    const MarketingTabsObjItems = MarketingTabsObj()
    const marketingTabs = useSelector(marketingTabsSelector);
    const dispatch = useDispatch()
    const [activeTab, setActiveTab] = useState(111)
    const [tabsmodal, settabsmodal] = useState({
        affliate: true,
        influencer: false,
    });


    const onchangePatient = (key, name) => {
        dispatch(activeSubTab({ tabName: "marketingTabs", key, name }))
    }
    const closePatient = () => {

    }
    useEffect(() => {
        console.log("Marketing useEffect");
        const workingTab = marketingTabs.find((tab) => tab.active)
        settabsmodal((prevtab) => ({
            ...prevtab,
            [workingTab.name]: true,
        }));
        setActiveTab(workingTab.key)
    }, [marketingTabs])
    console.log("Marketing");
    return (
        <div>
            <h1>Marketing</h1>
            <ul className="flex items-center gap-2 text-sm font-medium" style={{ height: "50px" }}>
                {MarketingTabsObjItems.map(({ key, name }) => {
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
                    {tabsmodal.affliate === true && <TabPane id={111} tabId={111}><Affliate /></TabPane>}
                    {tabsmodal.influencer === true && <TabPane id={112} tabId={112}><Influencer /></TabPane>}
                </Suspense>
            </TabContent>}
        </div>
    )
}

export default Marketing