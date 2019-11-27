import styled from "styled-components"
import crown from "../../../assets/crown.png"

export const ResultWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 15% auto;
  grid-template-areas: 
    "textWinner ."
    "winner looser";
    grid-column-gap: 96px;
`

export const TextWinner = styled.h1`
  font-size:36px;
  color:#43E97D;
  margin-bottom:34px;
  justify-self: center;
`
export const Card = styled.div`
  background: #fff;
  padding: 24px 24px;
  border: 1px solid #EEF1F4;
  border-radius: 5px;
  width: 192px;
  position: relative;

  &.winner{
    grid-area: winner;

    &::before{
      content: url(${crown});
      position: absolute;
      top: 0;
      top: -70px;
      right: -50px;
    }
  }

  &.looser{
    grid-area: looser;
  }
`

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`

export const Name = styled.h3`
  font-size: 20px;
  color: #132740;
  margin-bottom: 8px;
`

export const City = styled.p`
  font-size: 12px;
  color: #7D8896;
  margin-bottom: 16px;
`

export const Photo = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
    margin-bottom: 16px;
    &.loser{
      background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
    }
  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 5px;
  }
`

export const ScoreWrapper = styled.div`
  p {
    color: #7D8896;
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: bold;
  }
  h2{
    color: #43E97D;
    font-size: 30px;
    margin-bottom: 16px;
  }

  h2.loser{
    color: #E74C3C;
  }
`

export const StatusList = styled.ul`
  div {
    display: flex;
    align-items: center;
  }
  span {
    color: #CED5DB;
    font-size: 24px;
    margin-right: 12px;
  }
  p{
    color: #132740;
    font-size: 14px;
    font-weight: 700;
  }
`