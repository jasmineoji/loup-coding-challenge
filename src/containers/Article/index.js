import React, { useState, useEffect } from "react"
import axios from "axios"
import { useBottomScrollListener } from "react-bottom-scroll-listener"
import Heading from "../../components/Heading"
import Content from "../../components/Content"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styled from "styled-components"
import Breakpoints from "../../constants/Breakpoints"
import Dialog from "../../components/Dialog"
import { calculateAgerageRating } from "../../utils/maths"

const ContentWrapper = styled.div`
  flex: 1;
  padding: 0 1rem;
  max-width: 1360px;

  @media (min-width: ${Breakpoints.Mobile_xs}) {
    padding: 0 1.5rem;
  }

  @media (min-width: ${Breakpoints.Mobile}) {
    padding: 0 2.5rem;
  }

  @media (min-width: ${Breakpoints.Tablet}) {
    padding: 0 2.5rem;
  }
`

const ArticleWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  const [authorInfo, updateAuthorInfo] = useState([])
  const [isDialogOpen, updateDialogState] = useState(false)
  const [userRating, updateUserRating] = useState(0)
  const [averageRating, updateAverageRating] = useState(0)

  const getArticle = async (articleName) => {
    // TODO: data validation and handling network request errors
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

    updateAuthorInfo(article.authors)
  }

  const getArticleRatings = () => {
    // Mock statistics returned from the API
    return {
      total: 17,
      numberOfUser: 5,
    }
  }

  useEffect(() => {
    // when container is mounted and ready
    getArticle("article.json")
  }, [])

  const popUpOpen = () => {
    !isDialogOpen && !userRating && updateDialogState(true)
  }

  const popUpClose = () => {
    updateDialogState(false)
  }

  const selectedRating = (rating) => {
    updateUserRating(rating)

    const { total, numberOfUser } = getArticleRatings()
    const average = calculateAgerageRating(total, numberOfUser, rating)
    updateAverageRating(average)
  }

  useBottomScrollListener(popUpOpen)

  return (
    <ArticleWrapper>
      <Header />
      <ContentWrapper>
        <Heading headingData={headingData} authorInfo={authorInfo} />
        <Content blocks={blocks} />
      </ContentWrapper>
      <Footer />
      {isDialogOpen && (
        <Dialog
          handleClose={popUpClose}
          selectedRating={selectedRating}
          ratingStat={getArticleRatings()}
          averageRating={averageRating}
        />
      )}
    </ArticleWrapper>
  )
}

export default Article
