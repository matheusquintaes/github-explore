import React from 'react'
import { battle } from '../../../utils/api'
import { MdPeople } from "react-icons/md";
import { MdCode } from "react-icons/md";
import { MdStar } from "react-icons/md";

import * as S from './styled'

export default class Results extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }
  componentDidMount () {
    const { playerOne, playerTwo } = this.props

    battle([ playerOne, playerTwo ])
      .then((players) => {
        this.setState({
          winner: players[0],
          loser: players[1],
          error: null,
          loading: false
        })
      }).catch(({ message }) => {
        this.setState({
          error: message,
          loading: false
        })
      })
  }
  render() {
    const { winner, loser, error, loading } = this.state
    console.log(winner)
    console.log(loser)
    if (loading === true) {
      return <p>LOADING</p>
    }

    if (error) {
      return (
        <p className='center-text error'>{error}</p>
      )
    }
    return (
    <>
      <S.ResultWrapper>
          <S.TextWinner>Winner</S.TextWinner>
          <S.Card className="winner">
            <S.ProfileWrapper>
              <S.Name> {winner.profile.name}</S.Name>
              
              {winner.profile.location && (
                <S.City> {winner.profile.location}</S.City>
              )}
        
              <S.Photo>
                <img src={winner.profile.avatar_url} alt={`Avatar for ${winner.profile.login}`}/>
              </S.Photo>
              <S.ScoreWrapper>
                <p>SCORE</p>
                <h2>{winner.score.toLocaleString()}</h2>
              </S.ScoreWrapper>
              <S.StatusList>
                <li>
                  <div>
                    <span> <MdPeople/></span> <p> {winner.profile.followers.toLocaleString()} followers</p>
                  </div>
                </li>
                <li><div><span> <MdCode/>  </span> <p> {winner.profile.public_repos.toLocaleString()} repositories</p> </div></li>
                <li><div><span>  <MdStar/> </span> <p>{winner.starCount.toLocaleString()} stars</p> </div></li>
              </S.StatusList>
              </S.ProfileWrapper>
          </S.Card>
          <S.Card className="looser">
          <S.ProfileWrapper>
            <S.Name> {loser.profile.name}</S.Name>
            
            {loser.profile.location && (
              <S.City> {loser.profile.location}</S.City>
            )}
       
            <S.Photo className="loser">
              <img src={loser.profile.avatar_url} alt={`Avatar for ${loser.profile.login}`}/>
            </S.Photo>
            <S.ScoreWrapper>
              <p>SCORE</p>
              <h2 className="loser">{loser.score.toLocaleString()}</h2>
            </S.ScoreWrapper>
            <S.StatusList>
              <li>
                <div>
                  <span> <MdPeople/></span> <p> {loser.profile.followers.toLocaleString()} followers</p>
                </div>
              </li>
              <li><div><span> <MdCode/>  </span> <p> {loser.profile.public_repos.toLocaleString()} repositories</p> </div></li>
              <li><div><span>  <MdStar/> </span> <p>{loser.starCount.toLocaleString()} stars</p> </div></li>
            </S.StatusList>
            </S.ProfileWrapper>
        </S.Card>
      </S.ResultWrapper>
     </>
    )
  }
} 