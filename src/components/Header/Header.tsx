import styles from "./Header.module.scss";
import { logoIcon, menuIcon } from "./icons";
import { useState } from "react";
import MenuBar from "./components/menu-bar/MenuBar";
import Button from "./components/button/Button";
import { IoMdSearch } from "react-icons/io";
import TextField from "./components/text-field/TextField";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);

  const menuIconClickHandler = () => {
    setShowMenu(!showMenu);
  };

  const searchIconClickHandler = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <>
      {showMenu && <MenuBar setOpen={setShowMenu} />}
      <div className={styles.container}>
        <div className={styles.menuSection}>
          <div
            className={styles.menuIconSection}
            onClick={menuIconClickHandler}
          >
            <img src={menuIcon} className={menuIcon} />
          </div>
          <div className={styles.logoIcon} onClick={() => navigate("/home")}>
            <img src={logoIcon} />
          </div>
        </div>
        <div className={styles.buttonsSection}>
          <div className={styles.writeButtonSection}>
            <Button
              title={"글쓰기"}
              onButtonClicked={() => {
                navigate("/home/portfolio");
              }}
            />
          </div>
          {showSearchInput && (
            <div className={styles.searchInputSection}>
              <TextField />
            </div>
          )}
          <div
            className={styles.searchButtonSection}
            onClick={searchIconClickHandler}
          >
            <IoMdSearch className={styles.searchIcon} />
          </div>
        </div>
      </div>
    </>
  );
};
