import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"
import GlobalStyles from "../../styles/global"


export default function Layout ({children}) {
  return (
    
    <S.LayoutWrapper>
      <GlobalStyles />
       {children} 
    </S.LayoutWrapper>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

