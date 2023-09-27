


import React, { Suspense, lazy, useEffect, useState } from 'react'
import BillingTabsObj from "./BillingTabsObj"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { TabContent, TabPane } from 'reactstrap';
import { activeSubTab, billingTabsSelector } from '../../Redux/TabsSlice/TabsSlice';

const Charges = lazy(() => import(   /* webpackChunkName: "Charges" */ "./Charges/Charges"));
const Payment = lazy(() => import(/* webpackChunkName: "Payment" */ "./Payment/Payment"));

const Billing = () => {
    const BillingTabsObjItems = BillingTabsObj()
    const billingTabs = useSelector(billingTabsSelector);
    const dispatch = useDispatch()
    const [activeTab, setActiveTab] = useState(111)
    const [tabsmodal, settabsmodal] = useState({
        charges: true,
        payment: false,
    });


    const onchangePatient = (key, name) => {
        dispatch(activeSubTab({ tabName: "billingTabs", key, name }))
    }
    const closePatient = () => {

    }
    useEffect(() => {
        const workingTab = billingTabs.find((tab) => tab.active)
        settabsmodal((prevtab) => ({
            ...prevtab,
            [workingTab.name]: true,
        }));
        setActiveTab(workingTab.key)
    }, [billingTabs])
    return (
        <div>
            <h1>Billing</h1>
            <ul className="flex items-center gap-2 text-sm font-medium" style={{ height: "50px" }}>
                {BillingTabsObjItems.map(({ key, name }) => {
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
                    {tabsmodal.charges === true && <TabPane id={21} tabId={21}><Charges /></TabPane>}
                    {tabsmodal.payment === true && <TabPane id={22} tabId={22}><Payment /></TabPane>}
                </Suspense>
            </TabContent>}
        </div>
    )
}

export default Billing