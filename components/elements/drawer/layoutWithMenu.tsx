
import React, { FC } from "react"
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Heading,
    HStack,
    Link,
    LinkProps,
    Stack,
    useDisclosure
  } from "@chakra-ui/react"
import DrawerMenu from "./drawerMenu";
import MenuList from "../menuList/menuList";

const LayoutWithMenu : FC<{}> = ({ children }) => {
    return (
      <Stack>
        <HStack p={5}>
          <Box display={{ base: "block", md: "none" }}> {/* for mobile */}
            <DrawerMenu />{ /* Drawerを利用 */}
          </Box>
        </HStack>
        <HStack alignItems="start" >
          <Box display={{ base: "none", md: "block" }} w={500} px={6}> {/* for desktop */}
            <MenuList />{ /* Navigationをそのまま利用 */}
          </Box>
          <Box>{ children }</Box>
        </HStack>
      </Stack>
    )
  }

export default LayoutWithMenu;