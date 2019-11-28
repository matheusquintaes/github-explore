import styled from "styled-components"

export const ResultWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 15% auto;
  grid-template-areas: 
    "textWinner ."
    "winner loser";
    grid-column-gap: 96px;
`

export const TextWinner = styled.h1`
  font-size:36px;
  color:#43E97D;
  margin-bottom:34px;
  justify-self: center;
`

