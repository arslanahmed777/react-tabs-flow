


import React, { Suspense, lazy, useEffect, useState } from 'react'
import ChargesTabsObj from "./ChargesTabsObj"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { TabContent, TabPane } from 'reactstrap';
import { activeSubTab, chargesTabsSelector } from '../../../Redux/TabsSlice/TabsSlice';

const Claim = lazy(() => import(   /* webpackChunkName: "Claim" */ "./Claim/Claim"));
const Notes = lazy(() => import(/* webpackChunkName: "Notes" */ "./Notes/Notes"));

const Charges = () => {
    const ChargesTabsObjItems = ChargesTabsObj()
    const chargesTabs = useSelector(chargesTabsSelector);
    const dispatch = useDispatch()
    const [activeTab, setActiveTab] = useState(111)
    const [tabsmodal, settabsmodal] = useState({
        claim: true,
        notes: false,
    });


    const onchangePatient = (key, name) => {
        dispatch(activeSubTab({ tabName: "chargesTabs", key, name }))
    }
    const closePatient = () => {

    }
    useEffect(() => {
        const workingTab = chargesTabs.find((tab) => tab.active)
        settabsmodal((prevtab) => ({
            ...prevtab,
            [workingTab.name]: true,
        }));
        setActiveTab(workingTab.key)
    }, [chargesTabs])
    return (
        <div>
            <h1>Charges</h1>
            <ul className="flex items-center gap-2 text-sm font-medium" style={{ height: "50px" }}>
                {ChargesTabsObjItems.map(({ key, name }) => {
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
                    {tabsmodal.claim === true && <TabPane id={211} tabId={211}><Claim /></TabPane>}
                    {tabsmodal.notes === true && <TabPane id={212} tabId={212}><Notes /></TabPane>}
                </Suspense>
            </TabContent>}
        </div>
    )
}

export default Charges