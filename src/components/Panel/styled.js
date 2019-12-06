import styled from "styled-components"
import media from "styled-media-query"

export const Panel = styled.div`
   background: #fff;
   padding: 32px;
   border: 1px solid #EEF1F4;
   border-radius: 5px;
   width: 100%;

   ${media.lessThan('large')`
      padding: 24px;
      border-radius: 0;
   `}
`

export const Title = styled.h1`
   font-size: 24px;
   color:#000;
   margin-bottom: 32px;
   font-weight: bold;

   ${media.lessThan('large')`
      font-size: 20px;
   `}
`