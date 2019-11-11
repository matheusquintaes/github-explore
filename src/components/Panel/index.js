import React from 'react'
import * as S from './styled'
import PropTypes from 'prop-types'

export default function Panel ({children, title}) {
  return (
      <S.Panel>
        <S.Title>{title}</S.Title>
        {children} 
      </S.Panel>
    )
  
}


Panel.propTypes = {
  children: PropTypes.node.isRequired,
}


