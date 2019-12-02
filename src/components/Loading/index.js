import React from 'react'
import { ReactComponent as Load } from '../../utils/load.svg';

import * as S from "./styled"

export default function Loading () {
  return (
    <S.LoadingWrapper>
        <Load/>
    </S.LoadingWrapper>
  )
}
