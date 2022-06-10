import React from "react";
import Navbar from "../Navbar/Navbar";
import { LayoutWrapper, MainWrapper } from "./Layout.styles";

const Layout = (props) => {
    return(
        <LayoutWrapper>
            <Navbar />
            <MainWrapper>
                {props.children}
            </MainWrapper>
        </LayoutWrapper>
    )
}

export default Layout;