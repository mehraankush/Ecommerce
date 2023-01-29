import React,{useState} from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import {motion} from 'framer-motion'

import Styles from './Product.module.css'
import Dodle from '../assets/plane.png'
import {ProductsData} from '../data/products'

const Products = () => {

    const [menuProducts, setMenuProducts] = useState(ProductsData);
    const [parent, enableAnimations] = useAutoAnimate();
    
    const filter =(type)=>{
        setMenuProducts(ProductsData.filter((product) => product.type===type));
     }

  return (
    <motion.div 
        whileInView={{scale: [0,1]}}
        transition = {{duration : 0.5}}
      className={Styles.container}>
           <img className='dodle' src={Dodle}/>
           <h1>Featured Products</h1>

           <div className={Styles.products}>
                <ul className={Styles.menu}>
                   <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
                   <li onClick={()=>filter('skin care')}>Skin Care</li>
                   <li onClick={()=>filter('conditioner')}>Conditioners</li>
                   <li onClick={()=>filter('foundation')}>Foundations</li>
                </ul>

                <div className={Styles.list} ref={parent}>
                    {
                        menuProducts.map((prod) => (
                            <div className={Styles.product}>
                                <div className="left-s">
                                    <div className="name">
                                        <span>{prod.name}</span>
                                        <span>{prod.detail}</span>
                                    </div>
                                    <span>{prod.price}$</span>
                                    <div>Shop Now</div>
                                </div>
                                <img src={prod.img} className="img-p" alt="image"/>
                            </div>
                        ))
                    }
                </div>
           </div>
    </motion.div>
  )
}

export default Products