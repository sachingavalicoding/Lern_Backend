import { BsTwitter } from "react-icons/bs";
import { RiHomeLine } from "react-icons/ri";
const LeftSidebar = () => {
  return (
    <div className="w-[20rem] bg-slate-200 border-2 border-slate-700 flex flex-col gap-4 px-2 py-4  ">
      <div className="flex items-center justify-around">
        <h2> Twitter </h2>
        <BsTwitter className="text-blue-400 text-3xl  " />
      </div>
      <div className="shadow-sm border-2 py-4 bg-slate-100 gap-8 flex flex-col">
        <div className="flex items-center justify-around border-2 py-3 ">
          <h3> Home </h3>
          <RiHomeLine />
        </div>
      
        <div className="flex items-center justify-around border-2 py-3 ">
          <h3> Explore  </h3>
          <RiHomeLine />
        </div>
      
        <div className="flex items-center justify-around border-2 py-3 ">
          <h3> Notification  </h3>
          <RiHomeLine />
        </div>
      
        <div className="flex items-center justify-around border-2 py-3 ">
          <h3> Profile  </h3>
          <RiHomeLine />
        </div>
      
        <div className="flex items-center justify-around border-2 py-3 ">
          <h3> Bookmarks  </h3>
          <RiHomeLine />
        </div>
      
        <div className="flex items-center justify-around border-2 py-3 ">
          <h3> Logout  </h3>
          <RiHomeLine />
        </div>
       <button className="text-white bg-blue-400 rounded-lg px-4 py-2 ">
        Post 
       </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
