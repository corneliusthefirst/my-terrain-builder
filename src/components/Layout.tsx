import React from "react"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto container app-background  min-h-screen">
        {children}
    </div>
  );
};

export default Layout;

