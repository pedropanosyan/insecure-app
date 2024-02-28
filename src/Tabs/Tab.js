import React from "react";
import { useTabState, Tab as ReakitTab, TabList, TabPanel } from "reakit/Tab";
import NamePicker from "./JsonBuilderDemo";
import URLInjection from "./URLInjection";

const Tab = () => {
  const tab = useTabState();
  return (
    <>
      <TabList {...tab} aria-label="My tabs">
        <ReakitTab {...tab}>Vuln Dependencies</ReakitTab>
        <ReakitTab {...tab}>
          URL Injection
        </ReakitTab>
        <ReakitTab {...tab}>Tab 3</ReakitTab>
      </TabList>
      <TabPanel {...tab}>
        <NamePicker />
      </TabPanel>
      <TabPanel {...tab}>
        <URLInjection />
      </TabPanel>
      <TabPanel {...tab}>Tab 3</TabPanel>
    </>
  );
}
export default Tab;