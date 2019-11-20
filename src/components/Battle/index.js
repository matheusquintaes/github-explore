import React from 'react'
import * as S from './styled'
import Panel from '../Panel'
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";




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

        <S.ContentWrapper>

          <S.FormWrapper>
            <label htmlFor='username' className='player-label'>
              Player One
            </label>
            <S.InputWrapper>
              <input
                type='text'
                id='username'
                placeholder='Github username'
                autoComplete='off'
              />
              <button
                type='submit'
                >
                <MdSubdirectoryArrowLeft/>
              </button>
            </S.InputWrapper>
          </S.FormWrapper>
          <span role="img" aria-label="battle"> ⚔️ </span>
          <S.FormWrapper>
            <label htmlFor='username' className='player-label'>
              Player One
            </label>
            <S.InputWrapper>
              <input
                type='text'
                id='username'
                placeholder='Github username'
                autoComplete='off'
              />
              <button
                type='submit'
                >
                <MdSubdirectoryArrowLeft/>
              </button>
            </S.InputWrapper>
          </S.FormWrapper>
        
         </S.ContentWrapper>
         
         <S.Buttom> BATTLE <MdArrowForward/> </S.Buttom>
      </Panel>
    </>
    )
  
}



