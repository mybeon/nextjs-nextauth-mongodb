import React from "react";
import MainNavigation from "./MainNavigation";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
