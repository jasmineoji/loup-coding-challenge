import React from "react"
import styled from "styled-components"
import Breakpoints from "../../constants/Breakpoints"
import Author from "../Author"

const HeadingWrapper = styled.div`
  text-align: left;
`

const Title = styled.h1`
  font-size: 2rem;

  @media (min-width: ${Breakpoints.Mobile}) {
    font-size: 3rem;
  }

  @media (min-width: ${Breakpoints.Desktop}) {
    font-size: 5rem;
  }
`

const Summary = styled.div`
  font-size: 1.5rem;

  @media (min-width: ${Breakpoints.Mobile}) {
    font-size: 2rem;
  }
`

const Image = styled.img`
  width: 100%;
  padding: 2rem 0;
  font-size: 1.5rem;

  @media (min-width: ${Breakpoints.Mobile}) {
    padding: 3rem 0;
  }
`

const Heading = ({ headingData, authorInfo }) => {
  const headingImage = headingData.imageList.landscape32medium2x

  return (
    <HeadingWrapper>
      <Title>{headingData.title}</Title>
      <Summary>{headingData.summary}</Summary>
      <Image src={headingImage && headingImage.url} alt={headingData.title} />
      <Author authorInfo={authorInfo} />
    </HeadingWrapper>
  )
}

export default Heading
