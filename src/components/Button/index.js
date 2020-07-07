import React from "react"
import styled from "styled-components"

const StyledButton = styled.a`
  padding: 1rem 1.5rem;
  font-weight: 500;
  border: 1px solid #3a5206;
  border-radius: 5px;
  text-decoration: none;
  color: #4d6d09;
  background-color: #fbfbfb;
  transition: all 0.3s ease;

  &:hover,
  &:active,
  &:focus {
    color: #fbfbfb;
    background-color: #4d6d09;
  }
`

const Button = ({ cta, url }) => {
  return (
    <StyledButton href={url} target="_blank">
      {cta}
    </StyledButton>
  )
}

export default Button
