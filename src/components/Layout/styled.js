import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.div`
  max-width:1100px;
  margin: 48px auto;
  display:flex;
  justify-content: center;

  ${media.lessThan('large')`
    margin: 32px auto;
    width:100%;
    flex-wrap: wrap; 
  `}

`