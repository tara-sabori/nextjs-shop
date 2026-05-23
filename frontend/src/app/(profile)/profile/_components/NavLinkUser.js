import NavLink from "@/components/NavLink";
import { PiBasket, PiChartLine, PiHouseSimpleBold, PiUser } from "react-icons/pi";

const NavLinkUser = () => {
  return (
        <ul className=" space-y-5">
          <li className="hidden lg:flex">
            <NavLink
              href={"/"}
              title={"صفحه اصلی"}
              icon={<PiHouseSimpleBold />}
            />
          </li>
          <li>
            <NavLink
              href={"/profile"}
              title={"داشبورد"}
              icon={<PiChartLine />}
            />
          </li>
          <li>
            <NavLink
              href={"/profile/payments"}
              title={"سفارشات"}
              icon={<PiBasket />}
            />
          </li>
          <li>
            <NavLink
              href={"/profile/me"}
              title={"اطلاعات کاربری"}
              icon={<PiUser />}
            />
          </li>
        </ul>
  );
};

export default NavLinkUser;
