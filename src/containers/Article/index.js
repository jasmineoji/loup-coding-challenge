import React, { useState, useEffect } from "react"
import axios from "axios"
import Heading from "../../components/Heading"
import Content from "../../components/Content"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styled from "styled-components"

const ContentWrapper = styled.div`
  flex: 1;
  padding: 0 1rem;
`

const ArticleWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const endpoint = "http://localhost:3000/api/"

const Article = () => {
  const [headingData, updateHeadingData] = useState({
    title: "",
    summary: "",
    urlPartial: "",
    imageList: {},
  })

  const [blocks, updateBlocks] = useState([])

  const getArticle = async (articleName) => {
    const {
      data: {
        result: { article },
      },
    } = await axios.get(`${endpoint}${articleName}`)

    updateHeadingData({
      title: article.title,
      summary: article.summary,
      imageList: article.imageList,
    })

    updateBlocks(article.blocks)
  }

  useEffect(() => {
    getArticle("article.json")
  }, [])

  return (
    <ArticleWrapper>
      <Header />
      <ContentWrapper>
        <Heading headingData={headingData} />
        <Content blocks={blocks} />
      </ContentWrapper>
      <Footer />
    </ArticleWrapper>
  )
}

export default Article
