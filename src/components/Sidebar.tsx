import {
    BriefcaseBusiness,
    CalendarDays,
    MessageSquareText,
    GraduationCap,
    ChevronLeft,
    ChevronRight,
  } from "lucide-react";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  
  const ListSidebar = [
    {
      id: 1,
      name: "Mentor",
      icon: <GraduationCap size={20} />,
      path: "/",
    },
    {
      id: 2,
      name: "Job",
      icon: <BriefcaseBusiness size={20} />,
      path: "/job",
    },
    {
      id: 3,
      name: "Booking",
      icon: <CalendarDays size={20} />,
      path: "/booking",
    },
    {
      id: 4,
      name: "Priority Dm",
      icon: <MessageSquareText size={20} />,
      path: "/priority-dm",
    },
  ];
  
  const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  
    return (
      <div className="flex h-screen">
        <div
          className={`${
            isCollapsed ? "w-16" : "w-48"
          } min-w-[4rem] bg-gray-100 border-r border-gray-300 transition-all duration-300 flex flex-col`}
        >
          <div className="flex justify-end p-2">
            <button
              onClick={toggleSidebar}
              className="text-gray-600 hover:text-gray-800"
            >
              {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
          </div>
  
          <div className="flex-1 flex flex-col gap-2 mt-4">
            {ListSidebar.map((item) => (
              <Link
                to={item.path}
                key={item.id}
                className={`flex items-center gap-3 p-6 hover:bg-gray-200 rounded-md transition ${
                  isCollapsed ? "justify-center" : "justify-start"
                }`}
              >
                {item.icon}
                {!isCollapsed && <span className="text-sm">{item.name}</span>}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  