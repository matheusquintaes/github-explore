import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

export default function PlayerPreview ({ username, onReset, label }) {
  return (
    <S.PlayerPrewieWrapper>
    
        <img
          src={`https://github.com/${username}.png?size=200`}
          alt={`Avatar for ${username}`}
        />
        <a
          href={`https://github.com/${username}`}
          >
            {username}
        </a>
    
        <button onClick={onReset}>
         x
        </button>
       
    </S.PlayerPrewieWrapper>
  )
}

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}