import React from 'react';
import ThemeChanger from "./ThemeChanger";
import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";


const Header = () => {
  return (
    <header className="navbar bg-base-100">
        <div className="flex-1">
            <FamilyMemberTabs />
        </div>
        <div className="flex-none">
            <ThemeChanger />
        </div>
    </header>
  )
}

export default Header