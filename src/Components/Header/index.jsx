import React from 'react';
import styles from "./Header.module.scss";
import { TfiBook } from 'react-icons/tfi';

const Header = () => {
    return(
        <header className={styles.header}>
            <TfiBook
                color='#fff'
                size={18}
            />
            <div className={styles.headerContainer}>NoteBook</div>
        </header>
    )
}

export default Header;