/* eslint-disable react/prop-types */
import ProductBox from './ProductBox';
import styles from './Products.module.css';

const categoryArray = ["All", "Clothing", "Headgear", "Accessories", "Footwear"];

const Products = ({ handleClick, productArray, setCategory, category }) => {
  return (
    <div>
      <section className={styles.products}>
        <header className={styles.categories}>
          {
            categoryArray.map(cat => (
              <h4
                key={cat}
                onClick={() => setCategory(cat.toLowerCase())}
                style={{
                  color: category == cat.toLowerCase() ? "#3d1551" : "#060208",
                  fontWeight: category == cat.toLowerCase() ? "600" : "500"
                }}
              >
                {cat}
              </h4>
            ))
          }
        </header>
        <main>
          {
            productArray.map(product => (
              <ProductBox key={product.id} handleClick={(e) => handleClick(e, product)} product={product}  />
            ))
          }
        </main>
      </section>
      <button className={styles.more}>Load more collections</button>
    </div>
  )
}

export default Products