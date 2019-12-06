import styled from "styled-components"
import media from "styled-media-query"

export const Header = styled.header`
  background: #fff;
  width:100vw;
  padding: 16px 0;
  top: 0;
  border-bottom: 1px solid #DFDFDF;

  ${media.lessThan('large')`
    padding: 16px;
    width:100%;
  `}
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  max-width:1100px;
  margin: 0 auto;
  justify-content: space-between; 
  align-items: center;
  ${media.lessThan('large')`
    max-width: 100%;
    margin: 0;
    display: block;
  `}
`
export const NavLeft = styled.nav`
  display: flex;
  align-items: center;
  
  ul {
    display: flex;
    flex-wrap: wrap;
  }

  a {
    padding: 0 2rem;
    font-size: 16px;
    font-weight: bold;
    color: rgb(139,139,139, 0.8);
    &.active{
        color:#180000;
    }

    ${media.lessThan('large')`
      padding: 0 12px;
      font-size: 14px;
    `}
  }
`

export const Logo = styled.div`
  margin-right: 2rem;

  ${media.lessThan('large')`
    margin-right: 1rem;
  `}
`

export const NavRight = styled.nav`
   a {
    padding: 0 2rem;
    font-size:16px;
    font-weight: bold;
    color: rgb(139,139,139, 0.8);
  }
`

