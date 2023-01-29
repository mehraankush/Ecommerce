import React from 'react'
import ReactCompareImage from 'react-compare-image'
import {motion} from 'framer-motion'

import Styles from './Virtual.module.css'
import shade from '../assets/shade.png'
import Before from '../assets/before.png'
import After from '../assets/after.png'

const Virtual = () => {
  return (
    <motion.div 
         whileInView={{opacity:[0,1]}}
         transition ={{duration:0.5 }}
        className={Styles.virtual}>

           <div className={Styles.leftSide}>
                <span>Virtual Try</span>
                <span>Never Buy the wrong shade again</span>
                <span>Try Now</span>
                <img src={shade} alt="Image of Shades"/>
           </div>

           <div className={Styles.rightSide}>
               <div className={Styles.Wrapper}>
                   <ReactCompareImage
                     leftImage={Before}
                     rightImage={After}
                   />
               </div>  
           </div>
    </motion.div>
  )
}

export default Virtual