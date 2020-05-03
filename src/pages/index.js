import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import IntroHeader from "../components/IntroHeader"
import ProductsGrid from "../components/ProductsGrid"
import Banner from "../components/Banner"
import About from "../components/Home/About"

export default () => (
  <Layout>
    <IntroHeader>
      <Banner
        title="NEW ARRIVALS ON SALE"
      >
        <Link to="/products" className="btn-white">
          Check our products
        </Link>
      </Banner>
    </IntroHeader>
    <ProductsGrid></ProductsGrid>
    <About />
  </Layout>
)
