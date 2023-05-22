import NavProducts from "./NavProducts";
import Search from "./Search";
import Logo from "./icons/Logo";
import Perfil from "./icons/Perfil";
import Shopping from "./icons/Shopping";

const Header = () => {
  return (
    <header className="bg-victoria-600 text-white py-4 px-12 flex justify-between items-center shadow-victoria-900 shadow-sm">
      <section className="flex items-center gap-8 ">
        <Logo />
        <NavProducts/>
      </section>
      <Search/>
      <section className="hidden sm:flex gap-6 text-white">
        <Perfil/>
        <Shopping/>
      </section>
    </header>
  );
};

export default Header;
