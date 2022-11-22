import React from 'react';
import styles from "./Header.module.scss"

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.menuContainer}>
            </div>
            <div className={styles.headerContainer}>NoteBook</div>
        </header>
    )
}

export default Header;