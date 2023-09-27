import React from 'react'
import { useDispatch } from 'react-redux'
import { goToSubTab } from '../../../../Redux/TabsSlice/TabsSlice'

const Influencer = () => {
    const dispatch = useDispatch()
    const SwitchTab = () => {
        const obj = {
            mainTab: { tabName: "mainTabs", name: "dashboard", key: 1, },
            subTab: { tabName: "dashboardTabs", name: "marketing", key: 11, },
            innerSubTab: { tabName: "marketingTabs", name: "affliate", key: 111, },
        }
        dispatch(goToSubTab(obj))
    }
    return (
        <div>Influencer


            <button onClick={SwitchTab} className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
                Go to Dashboard - Marketing - Afffliate
            </button>
        </div>
    )
}

export default Influencer