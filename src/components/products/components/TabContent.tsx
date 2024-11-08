import React from "react";

interface TabContentProps {
  selectedTab: number;
  index: number;
}
const TabContent = (props: TabContentProps) => {
  //in this case the selected tab has 2 values possible( 0 and 1)
  // 0 --> all products and 1 --> favorite products
  const { selectedTab, index } = props;
  return <div hidden={selectedTab !== index}>{selectedTab}</div>;
};

export default TabContent;
