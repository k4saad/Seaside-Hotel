import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-[#032B22] px-5 py-8 font-LakesNeueRegular text-[#EFEDE7]">
      <Link to="/admin/room/all">
      <svg
              fill="#EFEDE7"
              className="mx-auto"
              height="60px"
              width="60px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512.001 512.001"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M511.796,185.786c-0.567-10.278-8.774-18.486-19.053-19.053c-2.178-0.121-31.679-1.556-69.508,5.472
                            c-8.081-38.037-20.873-64.963-21.508-66.285c-4.458-9.281-15.179-13.72-24.893-10.312c-1.383,0.485-29.459,10.478-62.063,31.651
                            c-21.693-31.582-43.491-51.387-45.298-53.006c-7.669-6.868-19.275-6.868-26.945,0c-1.807,1.618-23.605,21.424-45.298,53.006
                            c-32.604-21.173-60.68-31.166-62.063-31.651c-9.713-3.41-20.437,1.031-24.893,10.312c-0.635,1.321-13.426,28.248-21.508,66.285
                            c-37.828-7.028-67.329-5.593-69.507-5.472c-10.278,0.567-18.486,8.774-19.053,19.053c-0.272,4.928-5.843,121.482,64.793,192.117
                            c59.901,59.899,152.82,64.995,182.685,64.995c3.956,0,6.797-0.089,8.317-0.152c1.519,0.063,4.358,0.152,8.317,0.152
                            c29.872-0.001,122.789-5.1,182.685-64.995C517.639,307.268,512.068,190.714,511.796,185.786z M372.523,141.266
                            c3.705,10.3,8.144,24.465,11.537,40.911c-11.438,3.778-23.035,8.458-34.393,14.241c-3.941-12.124-8.83-23.637-14.245-34.399
                            C349.411,152.831,362.595,145.944,372.523,141.266z M139.501,141.276c9.93,4.68,23.103,11.564,37.078,20.742
                            c-5.415,10.762-10.304,22.275-14.245,34.399c-11.355-5.781-22.952-10.46-34.387-14.238
                            C131.34,165.795,135.789,151.606,139.501,141.276z M93.561,349.342c-42.523-42.52-51.2-109.376-52.8-142.057
                            c25.855,1.26,73.049,6.959,112.694,30.316c-0.623,6.014-0.956,12.122-0.956,18.314c0,59.136,30.263,110.762,55.72,143.73
                            C173.405,394.843,126.395,382.177,93.561,349.342z M256.002,393.691c-21.988-24.252-63.112-77.653-63.112-137.777
                            c-0.001-60.129,41.132-113.535,63.11-137.777c21.988,24.252,63.113,77.653,63.113,137.777S277.99,369.438,256.002,393.691z
                            M418.443,349.341c-32.678,32.678-79.723,45.364-114.589,50.213c25.444-32.973,55.651-84.558,55.651-143.642
                            c0-6.191-0.334-12.299-0.956-18.312c39.674-23.375,86.905-29.064,112.737-30.321C469.747,239.911,461.156,306.628,418.443,349.341
                            z"
                  />
                </g>
              </g>
            </svg>
      </Link>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase ">
              room
            </label>
            <NavLink to="/admin/room/all"
              className={({isActive}) => `flex transform items-center rounded-lg px-3 py-2 transition-colors duration-300 ${
                isActive ? "text-[#032B22] bg-[#EFEDE7]" : ""} hover:bg-[#EFEDE7] hover:text-[#032B22]`}
            >
              <span className="mx-2 text-sm font-medium">Existing Rooms</span>
            </NavLink>
            <NavLink
            to="/admin/room/add"
            className={({isActive}) => `flex transform items-center rounded-lg px-3 py-2 transition-colors duration-300 ${
                isActive ? "text-[#032B22] bg-[#EFEDE7]" : ""} hover:bg-[#EFEDE7] hover:text-[#032B22]`}
              >
              <span className="mx-2 text-sm font-medium">Add Room</span>
            </NavLink>
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase">
              booking
            </label>
            <NavLink 
              className="flex transform items-center rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-[#EFEDE7] hover:text-[#032B22]"
            >
              <span className="mx-2 text-sm font-medium">All Bookings</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
