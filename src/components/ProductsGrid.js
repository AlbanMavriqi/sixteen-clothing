import React from "react"
import Products from "../data/products"
import Title from "../components/Title"
import styles from "../css/products.module.css"
import { Link } from "gatsby"
import 'font-awesome/css/font-awesome.min.css';

var excludeAfterIndex = 6;
const ProductsGrid = ({ children }) => {
  return (
    <section>
        <Title title="Latest Products"/>
        <Link to="/products" className={styles.sectionHeading}>View All Products ></Link>
        <div className={styles.latestProducts}>
          {
            Products.map((item,index)=>{
              const stars = [];
              for (let index = 0; index < item.rating; index++) {
                stars.push(<li><i className="fa fa-star"></i></li>);
                
              }
              if(index < excludeAfterIndex){
                  return( <div className={styles.productItem}>
                  <Link to="/"><img src={item.image} alt="" /></Link>
                    <div className={styles.downContent}>
                      <Link to="/"><h4>{item.title}</h4></Link>
                      <h6>${item.price}</h6>
                      <p>{item.description}</p>
                      <ul className={styles.stars}>
                        {stars}
                      </ul>
                      <span>Reviews ({item.reviews})</span>
                    </div>
                  </div>
                )
              }
              else{
                return (null);
              }
            })
          }
        </div>
    </section>
)
}

export default ProductsGrid
