import { atom } from "recoil";
export const $ShowNavbar = atom ({
    key : "$ShowNavbar",
    default : true,
});

export const $Navbar_fristtab = atom ({
    key : "$Navbar_fristtab",
    default : [
        { name : "HOME" , link : "/"},
        { name : "ABOUT" , link : "about"},
        { name : "BLOG" , link : "blog"},
    ],
});

export const $Navbar_secondtab = atom ({
    key : "$Navbar_secondtab",
    default : [
        { name : "PORTFOLIO" , link : "portfolio"},
        { name : "CONTACT" , link : "contact"},
        { name : "SHOP" , link : "shop"},
    ],
});

export const $Navbar_abouttab = atom ({
    key : "$Navbar_secondtab",
    default : [
        { name : "TEAM" , link : "#"},
        { name : "SERVICES" , link : "#"},
        { name : "TESTIMONIALS" , link : "#"},
    ],
});