import { createSelector, createSlice } from "@reduxjs/toolkit";
import MainTabsObj from "../../Pages/HomePage/MainTabsObj";
import DashboardSubtabsObj from "../../MainTabs/Dashboard/DashboardSubtabsObj";
import MarketingTabsObj from "../../MainTabs/Dashboard/Marketing/MarketingTabsObj";
import FinanceTabsObj from "../../MainTabs/Dashboard/Finance/FinanceTabsObj";
import BillingTabsObj from "../../MainTabs/Billing/BillingTabsObj";
import PaymentTabsObj from "../../MainTabs/Billing/Payment/PaymentTabsObj";
import ChargesTabsObj from "../../MainTabs/Billing/Charges/ChargesTabsObj";

const initialState = {
  sidebar: true,
  mainTabs: MainTabsObj(),
  dashboardTabs: DashboardSubtabsObj(),
  marketingTabs: MarketingTabsObj(),
  financeTabs: FinanceTabsObj(),
  billingTabs: BillingTabsObj(),
  chargesTabs: ChargesTabsObj(),
  paymentTabs: PaymentTabsObj(),


};

export const TabsSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    activeSubTab: (state, action) => {
      const oldMainTabs = state[action.payload.tabName];
      const updatedMainTabs = oldMainTabs.map((tab) => ({ ...tab, active: tab.key === action.payload.key ? true : false, }));
      return {
        ...state,
        [action.payload.tabName]: updatedMainTabs,
      };
    },

    goToSubTab: (state, action) => {
      const oldMainTabs = state[action.payload.mainTab.tabName];
      const updatedMainTabs = oldMainTabs.map((tab) => ({ ...tab, active: tab.key === action.payload.mainTab.key ? true : false, }));

      const oldSubTabTabs = state[action.payload.subTab.tabName];
      const updatedSubTabs = oldSubTabTabs.map((tab) => ({ ...tab, active: tab.key === action.payload.subTab.key ? true : false, }));

      const oldInnerSubTabTabs = state[action.payload.innerSubTab.tabName];
      const updatedInnerSubTabs = oldInnerSubTabTabs.map((tab) => ({ ...tab, active: tab.key === action.payload.innerSubTab.key ? true : false, }));
      return {

        ...state,
        [action.payload.mainTab.tabName]: updatedMainTabs,
        [action.payload.subTab.tabName]: updatedSubTabs,
        [action.payload.innerSubTab.tabName]: updatedInnerSubTabs,
      }
    }
  },
});

export const tabsSelector = (state) => state.tabs;
export const mainTabsSelector = createSelector([tabsSelector], (tabs) => tabs.mainTabs)
export const dashboardTabsSelector = createSelector([tabsSelector], (tabs) => tabs.dashboardTabs)
export const marketingTabsSelector = createSelector([tabsSelector], (tabs) => tabs.marketingTabs)
export const financeTabsSelector = createSelector([tabsSelector], (tabs) => tabs.financeTabs)
export const billingTabsSelector = createSelector([tabsSelector], (tabs) => tabs.billingTabs)
export const chargesTabsSelector = createSelector([tabsSelector], (tabs) => tabs.chargesTabs)
export const paymentTabsSelector = createSelector([tabsSelector], (tabs) => tabs.paymentTabs)

export const sidebarSelector = createSelector([tabsSelector], (tabs) => tabs.sidebar)





// Action creators are generated for each case reducer function
export const { activeSubTab, goToSubTab } = TabsSlice.actions;

export default TabsSlice.reducer;
