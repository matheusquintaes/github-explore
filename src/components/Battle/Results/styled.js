import styled from "styled-components"

export const ResultWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 15% auto auto;
  grid-template-areas: 
    "textWinner ."
    "card1 card2"
    "action action";
    grid-column-gap: 96px;
`

export const TextWinner = styled.h1`
  font-size:36px;
  color:#43E97D;
  margin-bottom:34px;
  justify-self: center;
`
export const Actions = styled.div`
  grid-area: action;

`
export const Buttom = styled.button` 
   margin: 48px auto 0 auto;
   background: #3269F2;
   font-size: 14px;
   border-radius: 30px;
   border: none;
   padding: 16px 32px;
   color: #fff;
   display: flex;
   align-items: center;
   box-shadow: 0 1px 3px hsla(0, 0%, 0%, .2);
`
