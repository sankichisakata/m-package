import DrawerLayout from "@/components/elements/drawer/drawerLayout";

const Header = () => {
  return (
    <nav
      className="
      fixed top-0 left-0 z-40
      w-full pt-2 md:pt-4 lg:pt-5 
      flex justify-center items-center
      "
    >
      <div
        className="
        bg-white
        shadow-md 
        rounded-md
        w-11/12 h-16 md:h-20 lg:h-24
        pl-2 md:pl-5 lg:pl-8 xl:pl-10
        md:pr-3 lg:pr-5 xl:pr-7
        flex justify-center items-center
        "
      >
        <DrawerLayout />
      </div>
    </nav>
  );
};

export default Header;
