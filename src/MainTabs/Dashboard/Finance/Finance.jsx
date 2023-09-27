import React, { Suspense, lazy, useEffect, useState } from 'react'
import FinanceTabsObj from "./FinanceTabsObj"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { TabContent, TabPane } from 'reactstrap';
import { activeSubTab, financeTabsSelector } from '../../../Redux/TabsSlice/TabsSlice';

const Invesment = lazy(() => import(   /* webpackChunkName: "Invesment" */ "./Invesment/Invesment"));
const Banking = lazy(() => import(/* webpackChunkName: "Banking" */ "./Banking/Banking"));

const Finance = () => {
    const FinanceTabsObjItems = FinanceTabsObj()
    const financeTabs = useSelector(financeTabsSelector);
    const dispatch = useDispatch()
    const [activeTab, setActiveTab] = useState(111)
    const [tabsmodal, settabsmodal] = useState({
        invesment: true,
        banking: false,
    });


    const onchangePatient = (key, name) => {
        dispatch(activeSubTab({ tabName: "financeTabs", key, name }))
    }
    const closePatient = () => {

    }
    useEffect(() => {
        const workingTab = financeTabs.find((tab) => tab.active)
        settabsmodal((prevtab) => ({
            ...prevtab,
            [workingTab.name]: true,
        }));
        setActiveTab(workingTab.key)
    }, [financeTabs])
    return (
        <div>
            <h1>Finance</h1>
            <ul className="flex items-center gap-2 text-sm font-medium" style={{ height: "50px" }}>
                {FinanceTabsObjItems.map(({ key, name }) => {
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
                    {tabsmodal.invesment === true && <TabPane id={121} tabId={121}><Invesment /></TabPane>}
                    {tabsmodal.banking === true && <TabPane id={122} tabId={122}><Banking /></TabPane>}
                </Suspense>
            </TabContent>}
        </div>
    )
}

export default Finance