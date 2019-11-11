import React from 'react'
import * as S from './styled'

export default class Header extends React.Component{
  render() {
    return(
      <S.Header>
        <S.HeaderWrapper>
          <S.NavLeft>   
            <S.Logo>  <span role="img" aria-label="emoji">🐱</span> Explore </S.Logo>   
            <ul>
              <li><a href="/Popular">Popular</a></li>
              <li><a href="/Battle">Battle</a></li>
            </ul>
          </S.NavLeft>
          <S.NavRight>
            <a href="/about"> About</a>
          </S.NavRight>
        </S.HeaderWrapper>
      </S.Header>
    )
  } 
}