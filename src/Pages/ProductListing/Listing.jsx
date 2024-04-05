import { CiSearch } from "react-icons/ci";
import styles from "./Listing.module.css";
import Filters from "../../Components/Listing/Filters";
import Products from "../../Components/Listing/Products";
// import ProductBox from "../../Components/Listing/ProductBox";
import { useEffect, useState } from "react";
import ProductDetail from "../../Components/Listing/ProductDetail";
import { productList } from "../../Components/Listing/Data";

const Listing = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedProduct, setSelectedProduct] = useState({});
  const [productArray, setProductArray] = useState(productList);

  // Filter states
  const [gender, setGender] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [role, setRole] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    let newArray = [];
      // Covering just one filter moethod
    if (gender && !role && !ethnicity) {
      newArray = productList.filter(el => el.gender == gender);
      console.log("just gender");
    }
    else if (!gender && role && !ethnicity) {
      newArray = productList.filter(el => el.role == role);
      console.log("just role");
    }
    else if (!gender && !role && ethnicity) {
      console.log("just ethnicity");
      newArray = productList.filter(el => el.ethnicity == ethnicity);
    }
    
    // COvering 2 filter methds
    else if (role && gender && !ethnicity) {
      console.log("role & gender");
      newArray = productList.filter(el => el.gender == gender && el.role == role);
    }
    else if (!role && gender && ethnicity) {
      console.log("eth & gender");
      newArray = productList.filter(el => el.gender == gender && el.ethnicity == ethnicity);
    }
    else if (ethnicity && role && !gender) {
      console.log("eth & role");
      newArray = productList.filter(el => el.gender == gender && el.role == role);
    }

    // All 3 present
    else if (ethnicity && role && gender) {
      console.log("all three");
      newArray = productList.filter(el => el.gender == gender && el.role == role && el.ethnicity == ethnicity);
    }
    setProductArray(newArray);
  }, [gender, role, ethnicity, category]);

  useEffect(() => {
      if (category == "all") return setProductArray(productList);
      const newArray = productList.filter(el => el.category == category);
      setProductArray(newArray);
  }, [category]);

  const openDetails = (e, product) => {
    if (e.target.tagName == 'svg') return;
    if (e.target.tagName !== 'svg') {
      setSelectedProduct(product);
      setShowDetails(true);
    }
  }

  useEffect(() => {
    setGender("");
    setCategory('all');
    setEthnicity("");
    setRole("");

    if (searchText) setProductArray(productList.filter(prod => prod.name.toLowerCase().includes(searchText)));
    else setProductArray(productList);
  }, [searchText]);

  return (
    <div className={styles.wrapper}>
      <h1>Costume Listing</h1>
      <div className={styles.searchBox}>
        <input type="search" placeholder='search' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <CiSearch size={24} stroke='#060208' />
      </div>
      <p className={styles.express}>Express delivery is available for payments made before 11am in Lagos and Abuja.</p>

      <section className={styles.main}>
        <Filters ethnicity={ethnicity} role={role} gender={gender} setRole={setRole} setEthnicity={setEthnicity} setGender={setGender} />
        <Products category={category} setCategory={setCategory} productArray={productArray} handleClick={(e, product) => openDetails(e, product)} />
      </section>

      <ProductDetail showDetails={showDetails} setShowDetails={setShowDetails} selectedProduct={selectedProduct} />
    </div>
  );
};

export default Listing;
