import styled from "styled-components"

export const PlayerPrewieWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 64px;
    border-radius: 50%;
    margin-right:12px;
  }

  a {
    margin-right:12px;
    max-width: 192px;
    overflow: hidden;
  }

  button {
    cursor: pointer;
    height: 25px;
    width: 25px;
    border: none;
    background: #f1f5f9;
    color: #d01919;
    border-radius: 30px;
  }
`


export const PlayeWrapper = styled.div`
  display: flex;
`