import Link from "next/link";
import logoImg from "@/assets/logo.jpg";
import classes from "./main-header.module.css";
import Image from "next/image";
// import MainHeaderBackground from "./main-header-background";
// import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      {/* <MainHeaderBackground /> */}
      <header className={classes["main-header"]}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="logo" priority /> News App
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </header>
    </>
  );
};
export default MainHeader;
