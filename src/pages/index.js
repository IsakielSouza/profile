import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Fala Galera, Feliz anos novo!</h1>
    <p>Bem Vindos ao meu site!</p>
    <p>
      Sou Isakiel Souza, 25, Apaixonado por tecnologia, trabalho com suporte a
      sistemas a mais de 5 anos, tenho bastante experia com atendimento ao
      cliente, tenho habilidades com infraestruturas
      <br />
      na metade do ano de 2018 resolvi migrade vez para area de dev, de quebra
      na mesma epoca que resolvi de vez encara essa nova jornada tambem conheci
      uma galera incrivel da
      <span style={{ color: "#fd78c5" }} class="styles__Code-cx2rsj-4 gQGhnS">
        <Link
          style={{ color: "#4ef579", textDecoration: "none" }}
          href="https://rocketseat.com.br/"
        >
          {" "}
          RocketSeat
        </Link>
      </span>
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Página 2</Link>
  </Layout>
)

export default IndexPage
