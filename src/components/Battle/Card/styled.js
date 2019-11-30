import styled from "styled-components"
import crown from "../../../assets/crown.png"


export const Photo = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-bottom: 16px;
  &.loser{
  }
img {
  width: 120px;
  border-radius: 50%;
  margin-top: 5px;
}
`

export const Card = styled.div`
  background: #fff;
  padding: 24px 24px;
  border: 1px solid #EEF1F4;
  border-radius: 5px;
  width: 192px;
  position: relative;
  &.winner{
    grid-area: card1;

    &::before{
      content: url(${crown});
      position: absolute;
      top: 0;
      top: -70px;
      right: -50px;
    }
  }

  &.winner{

    div${Photo}{
      background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
    }
    h2{
      color: #43E97D;
    }
  }
  &.loser{
    grid-area: card2;

    div${Photo}{
      background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
    }

    h2 {
      color: #E74C3C;
    }
  }
  &.draw:first-of-type{
    grid-area: card1;
  }
  &.draw:last-of-type{
    grid-area: card2;
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


export const ScoreWrapper = styled.div`
p {
  color: #7D8896;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: bold;
}
h2{
  color: #132740;
  font-size: 30px;
  margin-bottom: 16px;
}
`
