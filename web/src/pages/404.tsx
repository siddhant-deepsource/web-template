import Container from "../components/container"
import React from "react"
import SEO from "../components/seo"

interface NotFoundPageProps {
  code: number
  title: string
  message: string
}

const NotFoundPage = (prop: NotFoundPageProps) => (
  <Container>
    <SEO title={prop.code + ": " + prop.title} />
    <h1>{prop.title}</h1>
    <p>{prop.message}</p>
  </Container>
)

export default NotFoundPage
