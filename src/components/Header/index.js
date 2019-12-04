import React from 'react'
import * as S from './styled'
import { ReactComponent as Logo } from '../../utils/logo.svg';
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component{
  render() {
    return(
      <S.Header>
        <S.HeaderWrapper>
          <S.NavLeft>   
            <S.Logo>  <Logo/>  </S.Logo>   
            <ul>
              <li>
                <NavLink
                  to='/'
                  exact
                  >
                    Popular
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/battle'
                  className=''>
                    Battle
                </NavLink>
              </li>
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