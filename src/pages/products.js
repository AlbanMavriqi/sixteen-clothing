import React, { Component } from "react"
import Layout from "../components/Layout"
import ProductsGrid from "../components/ProductsGrid"

export default class products extends Component {
  render() {
    return <Layout><ProductsGrid></ProductsGrid></Layout>
  }
}
