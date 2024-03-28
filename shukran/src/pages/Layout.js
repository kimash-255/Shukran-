// /src/components/common/Layout.js

import Header from "@/components/header";


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-6">{children}</main>
      {/* Footer or other common elements can be added here */}
    
    </div>
  );
};

export default Layout;
