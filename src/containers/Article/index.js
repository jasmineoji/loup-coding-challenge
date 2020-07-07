import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styled from "styled-components"

const ContentWrapper = styled.div`
  padding: 0 20px;
  flex: 1;
`

const ArticleWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Article = () => {
  return (
    <ArticleWrapper>
      <Header />
      <ContentWrapper>Content Placeholder</ContentWrapper>
      <Footer />
    </ArticleWrapper>
  )
}

export default Article
