import React from "react"
import styled from "styled-components"
import Button from "../Button"
import Breakpoints from "../../constants/Breakpoints"

const ContentWrapper = styled.div`
  font-size: 1.5rem;
`

const ArticleBlock = styled.div`
  @media (min-width: ${Breakpoints.Tablet}) {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    column-gap: 2rem;
    row-gap: 1rem;
  }

  @media (min-width: ${Breakpoints.Desktop}) {
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
  }

  .intro {
    font-size: 1.8rem;
    line-height: 3rem;
    margin: 3rem 0;

    @media (min-width: ${Breakpoints.Tablet}) {
      margin: 5rem 0;
    }
  }
`

const ArticleWrapper = styled.div`
  text-align: left;
  margin-bottom: 3rem;

  @media (min-width: ${Breakpoints.Mobile}) {
    margin-bottom: 5rem;
  }

  @media (min-width: ${Breakpoints.Desktop}) {
    margin-bottom: 8rem;
  }
`

const ArticleImage = styled.img`
  max-width: 100%;
`

const StyledArticleImage = styled.div`
  max-height: 30rem;
  overflow: hidden;
  display: flex;
  align-items: center;
`

const ArticleHeading = styled.h2`
  font-size: 2rem;

  @media (min-width: ${Breakpoints.Tablet}) {
    font-size: 2.5rem;
    height: 5rem;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Content = ({ blocks }) => {
  return (
    <ContentWrapper>
      {blocks.map((block) => (
        <ArticleBlock>
          {typeof block.content === "string" ? (
            <div className="intro" key={block.blockTypeId}>
              {block.content}
            </div>
          ) : (
            block.content.map((contentBlock) => (
              <ArticleWrapper key={contentBlock.url}>
                <ArticleHeading>{contentBlock.title}</ArticleHeading>
                <StyledArticleImage>
                  <span>
                    <ArticleImage
                      src={
                        contentBlock.imageList &&
                        contentBlock.imageList.landscapedesktop1x.url
                      }
                      alt={contentBlock.title}
                    />
                  </span>
                </StyledArticleImage>
                <p>{contentBlock.summary}</p>
                <ButtonWrapper>
                  <Button cta="Read more" url={contentBlock.url} />
                </ButtonWrapper>
              </ArticleWrapper>
            ))
          )}
        </ArticleBlock>
      ))}
    </ContentWrapper>
  )
}

export default Content
