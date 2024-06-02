import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import BoardPage from './BoardPage';

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      
      <BoardPage />
    </div>
  );
};

export default App;
