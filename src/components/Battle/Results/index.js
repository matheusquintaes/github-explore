import React from 'react'
import { MdPeople } from "react-icons/md";
import { MdCode } from "react-icons/md";
import { MdStar } from "react-icons/md";
import * as S from './styled'

export default class Results extends React.Component {
  render() {
    return (
      <S.ResultWrapper>
        <S.Card>
          <S.ProfileWrapper>
            <S.Name>Estelle Griset</S.Name>
            <S.City>Santa Clara, California</S.City>
            <S.photo>
              <img src="https://avatars0.githubusercontent.com/u/8750294?s=460&v=4" alt=""/>
            </S.photo>
            <S.ScoreWrapper>
              <p>SCORE</p>
              <h2>57,867</h2>
            </S.ScoreWrapper>
            <S.StatusList>
              <li>
                <div>
                  <span> <MdPeople/></span> <p>11,114 followers</p>
                </div>
              </li>
              <li><div><span> <MdCode/>  </span> <p>78 Repositories</p> </div></li>
              <li><div><span>  <MdStar/> </span> <p>24,577 stars</p> </div></li>
            </S.StatusList>
            </S.ProfileWrapper>
        </S.Card>
        <S.Card>
          <S.ProfileWrapper>
            <S.Name>Estelle Griset</S.Name>
            <S.City>Santa Clara, California</S.City>
            <S.photo>
              <img src="https://avatars0.githubusercontent.com/u/8750294?s=460&v=4" alt=""/>
            </S.photo>
            <S.ScoreWrapper>
              <p>SCORE</p>
              <h2>57,867</h2>
            </S.ScoreWrapper>
            <S.StatusList>
              <li>
                <div>
                  <span> <MdPeople/></span> <p>11,114 followers</p>
                </div>
              </li>
              <li><div><span> <MdCode/>  </span> <p>78 Repositories</p> </div></li>
              <li><div><span>  <MdStar/> </span> <p>24,577 stars</p> </div></li>
            </S.StatusList>
            </S.ProfileWrapper>
        </S.Card>
        
      </S.ResultWrapper>
    )
  }
} 