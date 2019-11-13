import React from 'react'
import * as S from './styled'
import { ReactComponent as Logo } from '../../utils/logo.svg';

export default class Header extends React.Component{
  render() {
    return(
      <S.Header>
        <S.HeaderWrapper>
          <S.NavLeft>   
            <S.Logo>  <Logo/>  </S.Logo>   
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