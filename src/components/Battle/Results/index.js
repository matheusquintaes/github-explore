import React from 'react'
import { battle } from '../../../utils/api'
import Card from '../Card'
import ProfileList from '../ProfileList'

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
          <Card 
            status="winner"
            name={winner.profile.name}
            location={winner.profile.location}
            avatar={winner.profile.avatar_url}
            score={winner.score.toLocaleString()}
          >
          <ProfileList
            profile={winner.profile}
            starCount={winner.starCount}
          />
          </Card>
          <Card 
            status="loser"
            name={loser.profile.name}
            location={loser.profile.location}
            avatar={loser.profile.avatar_url}
            score={loser.score.toLocaleString()}
          >
          <ProfileList
            profile={loser.profile}
            starCount={loser.starCount}
          />
          </Card>
      </S.ResultWrapper>
     </>
    )
  }
} 