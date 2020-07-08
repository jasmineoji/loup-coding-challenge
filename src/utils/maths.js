export const calculateAgerageRating = (total, numberOfUser, newRating) => {
  const averageValue = (total + newRating) / (numberOfUser + 1)
  return parseFloat(averageValue.toFixed(1))
}
