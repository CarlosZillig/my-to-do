import React from 'react';
import styles from './Nav.module.scss'
import { AiOutlineUnorderedList, AiOutlineDelete, AiFillGithub } from 'react-icons/ai'
import { BsListCheck } from 'react-icons/bs'
import { SiAboutdotme } from 'react-icons/si'
import classNames from 'classnames';
import { useState } from 'react';

const Nav = ({ menu }) => {
    const menuItems = [
        {
            name: <AiOutlineUnorderedList className={styles.icon} />,
            desc: 'Tarefas',
            to: 'google.com.br',
        },
        {
            name: <AiOutlineDelete className={styles.icon} />,
            desc: 'Apagados',
            to: 'google.com.br',
        },
        {
            name: <BsListCheck className={styles.icon} />,
            desc: 'Finalizados',
            to: 'google.com.br',
        },
        {
            name: <SiAboutdotme className={styles.icon} />,
            desc: 'Sobre nós',
            to: 'google.com.br',
        },
        {
            name: <AiFillGithub className={styles.icon} />,
            desc: 'Repositório',
            to: 'google.com.br',
        },
    ]

    return (
        <nav className={classNames({
            [styles.nav]: menu === true,
            [styles.hidden]: menu === false
        })}>
            <ul className={styles['nav-list']}>
                {menuItems.map((item) => (
                    <a href={item.to} key={item.desc}>
                        <li className={styles['nav-item']}>
                            <p className={styles.title}>{item.name}</p>
                            <span className={styles.desc}>{item.desc}</span>
                        </li>
                    </a>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;