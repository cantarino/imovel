import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/core";
import React from "react";
import { ApartmentTable } from "../components/ApartmentTable";
import { Wrapper } from "../components/commons/Wrapper";
import { HouseTable } from "../components/HouseTable";

const Index = () => {
  return (
    <Wrapper>
      <Tabs variant="soft-rounded" variantColor="teal">
        <TabList>
          <Tab>Apartmentos</Tab>
          <Tab>Casas</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ApartmentTable />
          </TabPanel>
          <TabPanel>
            <HouseTable />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
};

export default Index;
