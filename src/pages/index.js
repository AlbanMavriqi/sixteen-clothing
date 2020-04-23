import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import IntroHeader from "../components/IntroHeader"
import ProductsGrid from "../components/ProductsGrid"
import Banner from "../components/Banner"
export default () => (
  <Layout>
    <IntroHeader>
      <Banner
        title="Vetem ne scancolor the JYYYYSK"
      >
        <Link to="/products" className="btn-white">
          Check our products
        </Link>
      </Banner>
    </IntroHeader>
    <ProductsGrid></ProductsGrid>
  </Layout>
)
