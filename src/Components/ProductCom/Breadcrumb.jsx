import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";
import {ChevronRightIcon} from "@chakra-ui/icons"

const Breadcrum = () => {
  return (
    <Breadcrumb spacing="8px"  separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Skin Care</BreadcrumbLink>
      </BreadcrumbItem>

    </Breadcrumb>
  );
};

export default Breadcrum;
