import Container from "../components/container"
import React from "react"
import SEO from "../components/seo"

const NotFoundPage = prop => (
  <Container defKey="2">
    <SEO title={prop.code + ": " + prop.title} />
    <h1>{prop.title}</h1>
    <p>{prop.message}</p>
  </Container>
)

export default NotFoundPage
