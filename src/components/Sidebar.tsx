import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

const Sidebar = () => {
  return (
    <aside className="sidebar fixed top-0 left-0 h-screen w-20 bg-[#1A1C1E] text-white flex flex-col justify-between items-center py-6">
      
      {/* Top Icons */}
      <ul className="flex flex-col items-center gap-6">
        <li>
          <div className="flex flex-col items-center">
            <FaHome size={24} />
            <span className="text-xs mt-1">Home</span>
          </div>
        </li>

        <li>
          <div className="flex flex-col items-center">
            <FaUser size={24} />
            <span className="text-xs mt-1">User</span>
          </div>
        </li>

        <li>
          <div className="flex flex-col items-center">
            <FaSearch size={24} />
            <span className="text-xs mt-1">Search</span>
          </div>
        </li>
      </ul>

      {/* Bottom Icons */}
      <ul className="flex flex-col items-center gap-6">
        <li>
          <div className="flex flex-col items-center">
            <IoMdSettings size={24} />
            <span className="text-xs mt-1">Settings</span>
          </div>
          <div className="flex flex-col items-center mt-5">
            <FaUser size={24} />
            <span className="text-xs mt-1">User</span>
          </div>
        </li>
      </ul>

    </aside>
  );
};

export default Sidebar;
