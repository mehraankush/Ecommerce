import React,{useState} from 'react'
import {CgShoppingBag} from 'react-icons/cg'
import {GoThreeBars} from 'react-icons/go'


import Styles from './Header.module.css'
import Logo from '../assets/logo.png'
const Header = () => {

const [showMenu, setShowMenu] = useState(true)

  return (
    <div className={Styles.container} >
        <div className={Styles.logo}>
           <img src={Logo}/>
           <span>Beauti</span>
        </div>

        <div className={Styles.rightSide}>
            <div className={Styles.bars} onClick={()=>setShowMenu(!showMenu)}>
                 <GoThreeBars />
            </div>

                 <ul className={Styles.menu} style={{display:showMenu?'inherit':"none"}}>
                   <li>Collections</li>
                   <li>Brands</li>
                   <li>New</li>
                   <li>Sales</li>
                   <li>Eng</li>
                 </ul>
                 
            <input type="text" placeholder='Search' className={Styles.searchBar}/>
            <CgShoppingBag className={Styles.bag}/>
        </div>
    </div>
  )
}

export default Header