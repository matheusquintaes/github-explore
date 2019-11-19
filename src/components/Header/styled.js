import styled from "styled-components"

export const Header = styled.header`
   background: #fff;
   width:100vw;
   padding: 1rem 0;
   top: 0;
   border-bottom: 1px solid #DFDFDF;
`
export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  max-width:1100px;
  margin: 0 auto;
  justify-content: space-between; 
  align-items: center;
`
export const NavLeft = styled.nav`
  display: flex;
  align-items: center;
  
  ul {
    display: flex;
  }

  a {
    padding: 0 2rem;
    font-size:1rem;
    font-weight: bold;
    color: rgb(139,139,139, 0.8)
  }
`

export const Logo = styled.div`
  margin-right: 2rem;
`

export const NavRight = styled.nav`
   a {
    padding: 0 2rem;
    font-size:1rem;
    font-weight: bold;
    color: rgb(139,139,139, 0.8)
  }
`

