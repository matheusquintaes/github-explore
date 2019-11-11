import styled from "styled-components"

export const Header = styled.header`
   background: #fff;
   width:100vw;
   position:fixed;
   padding: 2rem 0;
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
    font-size:1.5rem;
  }
`

export const Logo = styled.div`
  margin-right: 2rem;
  font-size: 2.3rem;
`

export const NavRight = styled.nav`

`

