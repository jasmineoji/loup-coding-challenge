import React, { useState } from "react"
import styled from "styled-components"

const DialogWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  height: 30rem;
  background: white;
  border: 1px solid gray;
  border-radius: 5px;
`

const DialogContent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
`

const CloseButton = styled.div`
  position: absolute;
  right: 2px;
  top: 2px;
  background-color: red;
  border-radius: 5px;
  width: 6rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`

const RatingButtons = styled.div`
  display: flex;
`

const RatingButton = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 2rem;
  font-size: 1.5rem;
  margin: 0.3rem;
  cursor: pointer;
  background-color: ${(props) => props.isActive && "red"};
`

const Dialog = ({ handleClose, selectedRating, averageRating }) => {
  const [rating, updateRating] = useState(0)

  return (
    <DialogWrapper>
      <DialogContent>
        <p>How do you rate this Article?</p>
        <RatingButtons>
          {[1, 2, 3, 4, 5].map((number) => (
            <RatingButton
              onClick={(e) => {
                if (!rating) {
                  const ratingValue = Number(e.target.getAttribute("data-rating"))
                  updateRating(ratingValue)
                  selectedRating(ratingValue)
                }
              }}
              data-rating={number}
              isActive={rating === number}
            >
              {number}
            </RatingButton>
          ))}
        </RatingButtons>
        {averageRating ? <p>Average rating: {averageRating}</p> : null}
        <CloseButton onClick={handleClose}>Close</CloseButton>
      </DialogContent>
    </DialogWrapper>
  )
}

export default Dialog
