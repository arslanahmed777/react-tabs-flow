import { FaBars, FaUserAlt } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";

const Header = () => {
  const onHandleLogout = () => {
  }
  return (
    <header className='header relative h-[5vh] py-2 px-4  bg-primaryColor text-white flex items-center justify-between'>
      <span className="font-bold text-lg max-w-[120px]"><img src="/img/logow.png" alt="logo" /></span>
      <div className="flex items-center w-full mr-auto space-x-4">
        <span className="text-xl cursor-pointer" >
          <FaBars />
        </span>{" "}
        <div className="w-[90%] ">
          <input placeholder="Type for search..." className="bg-white/70  ml-6 focus:bg-white/15 rounded-full w-[20%] text-textColor placeholder:text-textColor  transition-[width] ease-in-out duration-500 px-2  p-1 outline-none " />
        </div>
      </div>

      <div className="flex items-center space-x-4 text-lg">
        <IoMdNotifications className="cursor-pointer" />
        <MdSpaceDashboard className="cursor-pointer" />
        <FaUserAlt className="cursor-pointer" />
        <div className="relative flex" data-te-dropdown-ref>
          <button className="" type="button" id="dsds" data-te-dropdown-toggle-ref aria-expanded="true"  >
            <BiDotsVerticalRounded />
          </button>
          <ul className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block" aria-labelledby="dropdownMenuButton1" data-te-dropdown-menu-ref>
            <li>
              <span onClick={onHandleLogout} className="block w-full px-4 py-2 text-sm font-normal bg-transparent cursor-pointer whitespace-nowrap text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" data-te-dropdown-item-ref>Logout</span>
            </li>

          </ul>
        </div>
      </div>
      {/* <div className="min-h-[380px] rounded-bl-full absolute top-[66px] z-0 w-full bg-primaryColor left-0"></div> */}
    </header>

  );
};

export default Header;