import styled from "styled-components"
import { Link } from 'react-router-dom'
import media from "styled-media-query"

export const ResultWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 15% auto auto;
  grid-template-areas: 
    "textWinner ."
    "card1 card2"
    "action action";
    grid-column-gap: 96px;
      
  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    grid-template-rows: 10% auto auto auto;
    grid-template-areas: 
    "textWinner"
    "card1"
    "card2"
    "action";
  `}
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
export const Buttom = styled(Link)` 
   background: #3269F2;
   font-size: 14px;
   border-radius: 30px;
   border: none;
   color: #fff;
   padding: 12px 16px;
   display: flex;
   box-shadow: 0 1px 3px hsla(0, 0%, 0%, .2);
   justify-content: center;
   align-items: center;
   margin: 24px auto;
   width: fit-content;
   svg {
      margin-left: 8px;
      font-size: 18px;
      margin: 12px auto;
   }
`
