import React from 'react'
import * as S from './styled'
import Panel from '../Panel'
import PlayerInput from './PlayerInput'
import PlayerPreview from './PlayerPreview'
import Results from './Results'

import { MdArrowForward } from "react-icons/md";


export default class Battle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playerOne: null,
      playerTwo: null,
      battle: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit(id, player) {
    this.setState({
      [id] : player
    })
  }
  handleReset(id) {
    this.setState({
      [id]: null
    })
  }
  render () {

    const { playerOne, playerTwo, battle } = this.state
    if (battle === true) {
      return <Results playerOne={playerOne} playerTwo={playerTwo} />
    }

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
                  label='Player One'
                  onSubmit={(player) => this.handleSubmit('playerOne', player)}
                />
              : <PlayerPreview
                  username={playerOne}
                  label='Player One'
                  onReset={() => this.handleReset('playerOne')}
                />
            }
          </S.FormWrapper>
        
          <span role="img" aria-label="battle"> ⚔️ </span>

          <S.FormWrapper>
            <S.Label>Player Two</S.Label>
            {playerTwo === null
              ? <PlayerInput
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
         
        <S.Buttom onClick={() => this.setState({battle:true})}> 
          BATTLE <MdArrowForward/>
        </S.Buttom>
      </Panel>
    </>
    )
  }
  
}



