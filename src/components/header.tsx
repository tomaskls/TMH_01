import DesktopNav from "./headerDescktop";
import MobileNavbar from "./mobileHeader";


const navItems = [
    { href: '/', label: 'Om' },
    { href: '/apie', label: 'Apie' },
    { href: '/kontaktai', label: 'Kontaktai' }
  ];
  
  export default function Header() {
    return (
      <header>
        <DesktopNav />
        <MobileNavbar navItems={navItems} />
      </header>
    );
  }