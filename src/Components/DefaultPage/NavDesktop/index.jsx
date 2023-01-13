import React from 'react';
import styles from '../NavDesktop/Nav.module.scss'
import { AiOutlineUnorderedList, AiOutlineDelete, AiFillGithub } from 'react-icons/ai'
import { BsListCheck } from 'react-icons/bs'
import { SiAboutdotme } from 'react-icons/si'
import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ menu }) => {
    const menuItems = [
        {
            name: <AiOutlineUnorderedList className={styles.icon} />,
            desc: 'Tarefas',
            to: '/',
        },
        {
            name: <AiOutlineDelete className={styles.icon} />,
            desc: 'Apagados',
            to: '/apagados',
        },
        {
            name: <BsListCheck className={styles.icon} />,
            desc: 'Finalizados',
            to: '/finalizados',
        },
        {
            name: <SiAboutdotme className={styles.icon} />,
            desc: 'Sobre nós',
            to: '/sobre',
        },
    ]

    return (
        <nav className={classNames({
            [styles.nav]: menu === true,
            [styles.hidden]: menu === false
        })}>
            <ul className={styles['nav-list']}>
                {menuItems.map((item) => (
                    <Link to={item.to} key={item.desc}>
                        <li className={styles['nav-item']}>
                            <p className={styles.title}>{item.name}</p>
                            <span className={styles.desc}>{item.desc}</span>
                        </li>
                    </Link>
                ))}
                {/*Adicionando uma ancora html para o github, não achei outra maneira para fazer isso*/}
                <a href='https://github.com/CarlosZillig/my-to-do'>
                    <li className={styles['nav-item']}>
                        <p className={styles.title}><AiFillGithub className={styles.icon}/></p>
                        <span className={styles.desc}>Repositório</span>
                    </li>
                </a>
            </ul>
        </nav>
    )
}

export default Nav;