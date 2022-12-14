import React from 'react';
import styles from "./Header.module.scss";
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
    return(
        <header className={styles.header}>
            <BiMenuAltLeft className={styles.menu}
            size={30}
            />
            <div className={styles.headerContainer}>MyTo-Do</div>
        </header>
    )
}

export default Header;