import NavLink from "@/components/NavLink";
import { PiBasket, PiChartLine, PiHouseSimpleBold, PiUser } from "react-icons/pi";

const NavLinkAdmin = () => {
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
              href={"/admin"}
              title={"داشبورد"}
              icon={<PiChartLine />}
            />
          </li>
          <li>
            <NavLink
              href={"/admin/categories"}
              title={"دسته‌بندی"}
              icon={<PiBasket />}
            />
          </li>
          <li>
            <NavLink
              href={"/admin/payments"}
              title={"سفارشات"}
              icon={<PiBasket />}
            />
          </li>
          <li>
            <NavLink
              href={"/admin/me"}
              title={"اطلاعات کاربری"}
              icon={<PiUser />}
            />
          </li>
        </ul>
  )
}

export default NavLinkAdmin