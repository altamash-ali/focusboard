
import { Search, Bell, UserCircle, Plus, ChevronDown } from "lucide-react";

function Header({ search, setSearch, onAddTask }) {
  return (
    <header className="header">
      <div className="header-title">
        <h3><span className="workspace">Workspace /</span> Overview</h3>
        <p>Manage your work and stay productive.</p>
      </div>

      <div className="header-actions">
        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* <button className="icon-btn" aria-label="Notifications">
          <Bell size={20} />
        </button> */}

        <div className="profile">
          {/* <UserCircle size={30} /> */}
          <h4 className="profile-name">JD</h4>
          <ChevronDown size={20} />
        </div>

        
      </div>
    </header>
  );
}

export default Header;
