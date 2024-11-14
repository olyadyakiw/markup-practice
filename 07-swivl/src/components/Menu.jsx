import { useState, useRef, useEffect } from "react";

import { MenuButton, MenuList, MenuItem, MenuLink } from "./styled/Menu.styled"

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    
    const toggleMenu = () => {
      setIsOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
        <div ref={menuRef}>
            <MenuButton onClick={toggleMenu}>
                <svg>
                    <use href="/sprite-icons.svg#dots" />
                </svg>
            </MenuButton>
            {isOpen && (
                <MenuList>
                  <MenuItem>
                    <MenuLink href="#">
                      <svg>
                        <use href="/sprite-icons.svg#edit" />
                      </svg>
                      Report User
                    </MenuLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuLink href="#">
                      <svg>
                        <use href="/sprite-icons.svg#edit" />
                      </svg>
                      Block User
                    </MenuLink>
                  </MenuItem>
                </MenuList>
            )}
        </div>
    )
}

export default Menu