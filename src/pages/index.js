import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/Layout"
import IntroHeader from "../components/IntroHeader"
import ProductsGrid from "../components/ProductsGrid"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import InformationBanner from "../components/Home/InformationBanner"

export default () => (
  <Layout>
    <IntroHeader>
      <Banner
        info="BEST OFFER"
        title="NEW ARRIVALS ON SALE"
      >
      </Banner>
    </IntroHeader>
    <ProductsGrid></ProductsGrid>
    <About />
    <InformationBanner />
  </Layout>
)
