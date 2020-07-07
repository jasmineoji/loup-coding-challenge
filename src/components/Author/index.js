import React from "react"
import styled from "styled-components"
import Breakpoints from "../../constants/Breakpoints"

const AuthorInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const AuthorImage = styled.img`
  max-width: 50px;
  margin-right: 1rem;
  font-size: 1.5rem;

  @media (min-width: ${Breakpoints.Mobile}) {
    max-width: 80px;
    margin-right: 2rem;
  }

  @media (min-width: ${Breakpoints.Desktop}) {
    max-width: 100px;
  }
`

const AuthorInfo = styled.div`
  font-size: 1.2rem;
  font-weight: bold;

  @media (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.7rem;
  }
`

const Author = ({ authorInfo }) => {
  // just in case there are multiple authors
  return authorInfo.map((author) => (
    <AuthorInfoWrapper>
      <AuthorImage
        src={author && author.imageList.square3x.url}
        alt="Author's Image"
      />
      <AuthorInfo>{author && author.name}</AuthorInfo>
    </AuthorInfoWrapper>
  ))
}

export default Author
