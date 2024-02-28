import React from "react";
import { useTabState, Tab as ReakitTab, TabList, TabPanel } from "reakit/Tab";
import NamePicker from "./JsonBuilderDemo";

const Tab = () => {
  const tab = useTabState();
  return (
    <>
      <TabList {...tab} aria-label="My tabs">
        <ReakitTab {...tab}>Vuln Dependencies</ReakitTab>
        <ReakitTab {...tab}>
          Tab 2
        </ReakitTab>
        <ReakitTab {...tab}>Tab 3</ReakitTab>
      </TabList>
      <TabPanel {...tab}>
        <NamePicker />
      </TabPanel>
      <TabPanel {...tab}>Tab 2</TabPanel>
      <TabPanel {...tab}>Tab 3</TabPanel>
    </>
  );
}
export default Tab;