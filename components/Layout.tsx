import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>Navbar</div>
      <main>{children}</main>
      <div>footer</div>
    </>
  );
};

export default Layout;
