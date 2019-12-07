/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import * as S from './styled'
import Panel from '../Panel'
import PlayerInput from './PlayerInput'
import PlayerPreview from './PlayerPreview'

import { Redirect } from 'react-router-dom'

import { MdArrowForward } from "react-icons/md";


export default class Battle extends React.Component {

  state = {
    playerOne: null,
    playerTwo: null,
    redirect: false,
    error: false
  }

  handleSubmit = (id, player) => {
    this.setState({
      [id] : player
    })
  }
  handleReset = (id) => {
    this.setState({
      [id]: null
    })
  }

  setRedirect = () => {
    const { playerOne, playerTwo } = this.state

    if(playerOne === null) {
      return this.setError('playerOne')
    } else if (playerTwo === null) {
      return this.setError('playerTwo')
    }
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    const { playerOne, playerTwo, redirect} = this.state
    
    if (redirect) {
      return (
        <Redirect to={{
          pathname: '/battle/results',
          search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
        }}/>
      )
    }
  }

  setError= (error) => {
    this.setState({
      error
    })
  }
  
  render () {

    const { playerOne, playerTwo, error} = this.state
    return (
    <>
      <S.Intructions>
        <h3>Instructions</h3>
        <ul>
          <li>1. Enter two Github users</li>
          <li>2. Battle</li>
          <li>3. See the winner
          </li>
        </ul>
      </S.Intructions>
      <Panel title="Github Battle" size="small">
        <S.ContentWrapper>
          <S.FormWrapper>
            <S.Label>Player One</S.Label>
            {playerOne === null
              ? <PlayerInput
                  error={error === 'playerOne' && true}
                  label='Player One'
                  onSubmit={(player) => this.handleSubmit('playerOne', player)
                }
                />
              : <PlayerPreview
                  username={playerOne}
                  label='Player One'
                  onReset={() => this.handleReset('playerOne')}
                />
            }
          </S.FormWrapper>
        
          <S.IconBattleWrapper role="img" aria-label="battle"> ⚔️ </S.IconBattleWrapper>   
          <S.FormWrapper>
            <S.Label>Player Two</S.Label>
            {playerTwo === null
              ? <PlayerInput
                  error={error === 'playerTwo' && true}
                  label='playerTwo'
                  onSubmit={(player) => this.handleSubmit('playerTwo', player)}
                />
              : <PlayerPreview
                  username={playerTwo}
                  label='Player One'
                  onReset={() => this.handleReset('playerTwo')}
                />
            }
          </S.FormWrapper>
        </S.ContentWrapper>
        <S.Buttom onClick={this.setRedirect} > 
          BATTLE <MdArrowForward/>
        </S.Buttom>
        {this.renderRedirect()}

      </Panel>
    </>
    )
  }
  
}



