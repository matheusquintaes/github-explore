import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

export default function Card ({name, location, avatar, score, status, children}) {
  return (
  <S.Card className={status === 'winner' ? 'winner' : 'loser '}>
    <S.ProfileWrapper>
      <S.Name> {name}</S.Name>
      {location && (
        <S.City> {location}</S.City>
      )}
      <S.Photo>
        <img src={avatar} alt={`Avatar for ${name}`}/>
      </S.Photo>
      <S.ScoreWrapper>
        <p>SCORE</p>
        <h2>{score}</h2>
      </S.ScoreWrapper>
      {children}
    </S.ProfileWrapper>
  </S.Card>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
} 