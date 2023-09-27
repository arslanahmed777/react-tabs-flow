import React from 'react'
import { useDispatch } from 'react-redux'
import { goToSubTab } from '../../../../Redux/TabsSlice/TabsSlice'

const Banking = () => {
    const dispatch = useDispatch()
    const SwitchTab = () => {
        const obj = {
            mainTab: { tabName: "mainTabs", name: "billing", key: 2, },
            subTab: { tabName: "billingTabs", name: "payment", key: 22, },
            innerSubTab: { tabName: "paymentTabs", name: "orders", key: 222, },
        }
        dispatch(goToSubTab(obj))
    }
    return (
        <div>Banking
            <button onClick={SwitchTab} className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
                Go to Billing - Payment - orders
            </button>
        </div>
    )
}

export default Banking