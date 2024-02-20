import React from "react"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="px-4 md:px-0 w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto app-background min-h-screen">
        {children}
    </div>
  );
};

export default Layout;

