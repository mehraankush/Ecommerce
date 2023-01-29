import React from 'react'
import Styles from './Hero.module.css'
import {BsArrowRight} from 'react-icons/bs'
import {RiShoppingBagFill} from 'react-icons/ri'
import {motion} from 'framer-motion'

import Model from '../assets/hero.png'

const Hero = () => {
  const transition = {duration:3,type:"spring"}
  return (
    <motion.div 
    whileInView={{y:[-100,0],opacity:[0,1]}}
    transition={{duration:0.5}}
        className={Styles.container}>
           {/* left Sides  */}
           <div className={Styles.sides}>
                <span className={Styles.text1}>Grooming products</span>
                <div className={Styles.text2}>
                    <span>Trendy Collection</span>
                    <span>All your needs in one place </span>
                </div>
           </div>
           
           {/* middle section */}
           <div className={Styles.wrapper}>
               <motion.div 
                initial={{bottom : "2rem"}}
                whileInView={{bottom:"0rem"}}
                transition={transition}
                className={Styles.bluecircle}></motion.div>
                       <motion.img 
                           initial={{bottom : "-2rem"}}
                           whileInView={{bottom:"0rem"}}
                           transition={transition}
                           src={Model} width={600}/>

                          {/* card section  */}
                       <motion.div 
                             initial={{right : "4%"}}
                             whileInView={{right:"2%"}}
                             transition={transition}
                            className={Styles.cart}>
                          <RiShoppingBagFill className={Styles.shoppingBag}/>
                            <div className={Styles.signup}>
                                <span>Best Signup offers</span>
                                <div>
                                    <BsArrowRight/>
                                </div>
                            </div>
                       </motion.div>
               
           </div>

           {/* right side  */}
            <div className={Styles.sides}>
                  <div className={Styles.traffic}>
                      <span>1m</span>
                      <span>Monthly traffic</span>
                  </div>
                  <div className={Styles.customers}>
                       <span>100k</span>
                       <span>Happy Customers</span>
                  </div>
            </div>

    </motion.div>
  )
}

export default Hero