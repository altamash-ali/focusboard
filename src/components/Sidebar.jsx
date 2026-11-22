
import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <LayoutDashboard size={21} />
        </div>
        <h2>FocusBoard</h2>
      </div>

      <p className="nav-heading">MENU</p>

      <nav className="sidebar-nav">
        <a className="nav-link active" href="#dashboard">
          <LayoutDashboard size={19} />
          Dashboard
        </a>

        <a className="nav-link" href="#tasks">
          <CheckSquare size={19} />
          My Tasks
        </a>

        <a className="nav-link" href="#calendar">
          <CalendarDays size={19} />
          Calendar
        </a>

        <a className="nav-link" href="#settings">
          <Settings size={19} />
          Settings
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
