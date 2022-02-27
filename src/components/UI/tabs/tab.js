import React from "react";
import TabContent from "./tabContent";
import { Tabs, Tab } from "react-bootstrap";

const TabsComponent = (props) => {
  if(!props.tabs) return null;
  return (
    <Tabs
      defaultActiveKey={props.defaultTab}
      id={`item-tabs_container_${props.id}`}
    >
      {props.tabs.map(({ id, title, component }) => {
        return (
          <Tab key={id} eventKey={id} title={title}>
            <TabContent>{component}</TabContent>
          </Tab>
        );
      })}
    </Tabs>
  );
};

export default TabsComponent;
