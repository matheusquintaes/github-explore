import React from 'react'
import * as S from './styled'
import Panel from '../Panel'

export default function Battle () {
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
        <form>
            <label htmlFor='username' className='player-label'>
            </label>
            <div className='row player-inputs'>
              <input
                type='text'
                id='username'
                placeholder='github username'
                autoComplete='off'
              />
              <button
                type='submit'
                >
                Submit
              </button>
            </div>
          </form>
          ⚔️
          <form>
            <label htmlFor='username' className='player-label'>
            </label>
            <div className='row player-inputs'>
              <input
                type='text'
                id='username'
                placeholder='github username'
                autoComplete='off'
              />
              <button
                type='submit'
                >
                Submit
              </button>
            </div>
          </form>
          
      </Panel>
    </>
    )
  
}



