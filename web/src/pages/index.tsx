import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/core";
import React from "react";
import { Wrapper } from "../components/commons/Wrapper";
import { ApartmentGrid } from "../components/grid/ApartmentGrid";
import { HouseGrid } from "../components/grid/HouseGrid";

const Index = () => {
  return (
    <Wrapper>
      <Heading size={"2xl"} mb={4}>
        ImóvelDB
      </Heading>
      <Tabs variant="soft-rounded" variantColor="teal">
        <TabList>
          <Tab>Apartmentos</Tab>
          <Tab>Casas</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ApartmentGrid />
          </TabPanel>
          <TabPanel>
            <HouseGrid />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
};

export default Index;
