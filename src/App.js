import React, { useState } from 'react';
import Sidebar from './Component/SideBar';
import BoardPage from './Component/BoardPage';
// import Footer from './Component/Footer';
// import Sidebar from '../Componet/Sidebar';
// import BoardPage from '../Component/BoardPage';

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 bg-gray-100">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
        <BoardPage />
      </div>
      
    </div>
  );
};

export default App;
