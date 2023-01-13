import Header from "./Header";
import Nav from "./NavDesktop";
import { useState } from 'react';
import style from './Navegation.module.scss'
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Navegation = () => {
  //Funções do menu mobile
  const [menu, setMenu] = useState(false)
  function menuMobile() {
    setMenu(!menu)
  }

  return (
    <>
      <div className={style.container}>
        <Header menuMobile={menuMobile} />
        <Nav menu={menu} />
        <Outlet />
        <Footer />
      </div>
    </>

  )
}

export default Navegation;