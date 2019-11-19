import React from 'react'
import * as S from './styled'
import Panel from '../Panel'

export default function Battle ({children, title}) {
  return (
    <>
      <section>
        <h3>Instructions</h3>
        <ul>
          <li>1. Enter two Github users</li>
          <li>2. Battle</li>
          <li>3. See the winner
          </li>
        </ul>
      </section>
      <Panel title="Battle" size="small">

      </Panel>
    </>
    )
  
}



