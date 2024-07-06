import React from 'react'
import Logo from './Logo';

const Navbar = () => {
    const navigation = [
        { title: "Home", href: "/" },
        { title: "Features", href: "/features" },
        { title: "About me", href: "/about" },
        { title: "Studio", href: "/studio" },
      ];
  return <div>
    <div>
        <Logo title="PosBlog" className="text-black" />
    </div>
  </div>;
};

export default Navbar