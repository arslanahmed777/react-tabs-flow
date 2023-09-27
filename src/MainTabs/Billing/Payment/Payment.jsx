// import React from 'react'

// const Payment = () => {
//     return (
//         <div>Payment</div>
//     )
// }

// export default Payment




import React, { Suspense, lazy, useEffect, useState } from 'react'
import PaymentTabsObj from "./PaymentTabsObj"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { TabContent, TabPane } from 'reactstrap';
import { activeSubTab, paymentTabsSelector } from '../../../Redux/TabsSlice/TabsSlice';

const Transactions = lazy(() => import(   /* webpackChunkName: "Transactions" */ "./Transactions/Transactions"));
const Orders = lazy(() => import(/* webpackChunkName: "Orders" */ "./Orders/Orders"));

const Payment = () => {
    const PaymentTabsObjItems = PaymentTabsObj()
    const paymentTabs = useSelector(paymentTabsSelector);
    const dispatch = useDispatch()
    const [activeTab, setActiveTab] = useState(111)
    const [tabsmodal, settabsmodal] = useState({
        transactions: true,
        orders: false,
    });


    const onchangePatient = (key, name) => {
        dispatch(activeSubTab({ tabName: "paymentTabs", key, name }))
    }
    const closePatient = () => {

    }
    useEffect(() => {
        const workingTab = paymentTabs.find((tab) => tab.active)
        settabsmodal((prevtab) => ({
            ...prevtab,
            [workingTab.name]: true,
        }));
        setActiveTab(workingTab.key)
    }, [paymentTabs])
    return (
        <div>
            <h1>Payment</h1>
            <ul className="flex items-center gap-2 text-sm font-medium" style={{ height: "50px" }}>
                {PaymentTabsObjItems.map(({ key, name }) => {
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
                    {tabsmodal.transactions === true && <TabPane id={221} tabId={221}><Transactions /></TabPane>}
                    {tabsmodal.orders === true && <TabPane id={222} tabId={222}><Orders /></TabPane>}
                </Suspense>
            </TabContent>}
        </div>
    )
}

export default Payment