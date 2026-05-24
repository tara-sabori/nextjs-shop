import NavLink from "@/components/NavLink";
import { PiBasket, PiChartLine, PiGridFour, PiHouseSimpleBold, PiUser, PiUsersFour, PiWallet } from "react-icons/pi";

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
              icon={<PiGridFour />}
            />
          </li>
          <li>
            <NavLink
              href={"/admin/products"}
              title={"محصولات"}
              icon={<PiBasket />}
            />
          </li>
          <li>
            <NavLink
              href={"/admin/payments"}
              title={"سفارشات"}
              icon={<PiWallet />}
            />
          </li>
          <li>
            <NavLink
              href={"/admin/users"}
              title={"کاربران"}
              icon={<PiUsersFour />}
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