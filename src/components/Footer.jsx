import React from 'react'
import {InboxIcon,PhoneIcon,LocationMarkerIcon,LoginIcon,UsersIcon,LinkIcon} from '@heroicons/react/outline'
import {motion} from 'framer-motion'

import Styles from './Footer.module.css'
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <motion.div 
        whileInView={{y:[100,0],opacity:[0,1]}}
        transition={{duration:0.5}}
       className={Styles.footerWrapper}>
        <hr/>

        <div className={Styles.footer}>
            <div className={Styles.logo}>
                <img src={Logo} alt="Logo"/>
                <span>Beauti</span>
            </div>
            <div className={Styles.block}>
                 <div className={Styles.detail}>
                     <span>Contect</span>
                     <span className={Styles.icons}>
                           <LocationMarkerIcon className={Styles.icon}/>
                           <span>6969 North east West coast</span>
                     </span>
                     <span className={Styles.icons}>
                           <PhoneIcon className={Styles.icon}/>
                           <span>69695469</span>
                     </span>
                     <span className={Styles.icons}>
                           <InboxIcon className={Styles.icon}/>
                           <a href="mailto:imdevloper@outlook.com">imdevloper@outlook.com</a>
                     </span>
                 </div>
            </div>
            <div className={Styles.block}>
                 <div className={Styles.detail}>
                     <span>Company</span>
                     <span className={Styles.icons}>
                           <UsersIcon className={Styles.icon}/>
                           <span>6969 North east West coast</span>
                     </span>
                 </div>
            </div>
            <div className={Styles.block}>
                 <div className={Styles.detail}>
                     <span>Resources</span>
                     <span className={Styles.icons}>
                           <LinkIcon className={Styles.icon}/>
                           <span>6969 North east West coast</span>
                     </span>
                 </div>
            </div>
        </div>
        <div className={Styles.copyright}>
            <span>Copyright @2022 by Beauti</span>
            <span>All Right Reserved</span>
        </div>
    </motion.div>
  )
}

export default Footer