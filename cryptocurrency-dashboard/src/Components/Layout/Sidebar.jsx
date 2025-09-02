import { BarChart4, LayoutDashboard, PlugZap2Icon, SettingsIcon, User2Icon, Wallet2Icon, ChevronLeft, ChevronRight, MenuIcon } from "lucide-react";
import React, { useState } from "react";

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: 'Dashboard',
    active: true,
    badge: "New"
  },
  {
    id: "analytics",
    icon: BarChart4,
    label: 'Analytics',
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: User2Icon,
    label: 'Users',
    count: "2.4k",
  },
  {
    id: "wallet",
    icon: Wallet2Icon,
    label: 'Wallet',
  },
  {
    id: "settings",
    icon: SettingsIcon,
    label: 'Settings',
  }
];

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSubmenus, setExpandedSubmenus] = useState({});

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    // If collapsing the sidebar, also collapse all submenus
    if (!isCollapsed) {
      setExpandedSubmenus({});
    }
  };

  const toggleSubmenu = (id) => {
    setExpandedSubmenus(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className={`flex flex-col relative z-10 transition-all duration-300 ease-in-out bg-white ${isCollapsed ? 'w-20' : 'w-72'}`}>
      {/* Logo and Toggle Button */}
      <div className="p-6 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <PlugZap2Icon className="w-6 h-6 text-white" />
          </div>
          
          {!isCollapsed && (
            <div>
              <h1 className="text-xl font-bold text-slate-800">Crypto</h1>
            </div>
          )}
        </div>
        
        <button 
          onClick={toggleSidebar}
          className="p-1 rounded-md hover:bg-slate-100 transition-colors"
        >
          {isCollapsed ? <MenuIcon size={20} /> : <MenuIcon size={20} />}
      
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          const hasSubmenu = item.submenu && item.submenu.length > 0;
          const isSubmenuExpanded = expandedSubmenus[item.id];
          
          return (
            <div key={item.id}>
              <button 
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 hover:bg-slate-100 ${item.active ? 'bg-blue-50 text-blue-600' : ''}`}
                onClick={() => hasSubmenu && toggleSubmenu(item.id)}
              >
                <div className="flex items-center space-x-3">
                  <IconComponent className="w-6 h-6 text-slate-600" />
                  {!isCollapsed && <span className="text-slate-800">{item.label}</span>}
                </div>
                
                {/* Optional badge or count */}
                {!isCollapsed && (
                  <>
                    {item.badge && (
                      <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {item.count && !item.badge && (
                      <span className="text-sm text-slate-500">{item.count}</span>
                    )}
                  </>
                )}
                
                {/* Submenu indicator */}
                {hasSubmenu && !isCollapsed && (
                  <span className={`transform transition-transform ${isSubmenuExpanded ? 'rotate-90' : ''}`}>
                    <ChevronRight size={16} />
                  </span>
                )}
              </button>
              
              {/* Submenu items */}
              {hasSubmenu && isSubmenuExpanded && !isCollapsed && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem.id}
                      className="w-full text-left p-2 pl-4 rounded-lg transition-all duration-200 hover:bg-slate-100 text-slate-600"
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;