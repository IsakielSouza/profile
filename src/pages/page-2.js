import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Um pouco mais sobre mim!</h1>

    <Link to="/">Voltar para Página 1</Link>
  </Layout>
)

export default SecondPage
