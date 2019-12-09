import styled from "styled-components"
import media from "styled-media-query"

export const Intructions = styled.section`
   margin-right: 24px;
   min-width: 200px;

   ${media.lessThan('large')`
      width: 100%;
      margin: 0 24px 24px 24px;
  `}

   h3 {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 1rem;     
      text-transform: uppercase; 

      ${media.lessThan('large')`
         font-size: 12px;
      `}
   }

   li {
      color: #7D8896;
      font-size: 16px;
      padding: 0.75rem 0;
      font-weight:500;
   }
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
  flex-wrap: wrap;
`


export const IconBattleWrapper = styled.span`
   font-size: 84px;
   margin: 0 48px;

  ${media.lessThan('large')`
      margin: 24px 0;
      display: block;;
   `}
`

export const FormWrapper = styled.div`
  display: block;
  width: 260px;

  ${media.lessThan('medium')`
      width: 100%;
   `}
  
`
export const Buttom = styled.button`
   background: #3269F2;
   font-size: 14px;
   border-radius: 30px;
   border: none;
   color: #fff;
   padding: 12px 16px;
   display: flex;
   box-shadow: 0 1px 3px hsla(0, 0%, 0%, .2);
   justify-content: center;
   align-items: center;
   margin: 0 auto;
   width: fit-content;
   cursor:pointer;
   
   svg {
      margin-left: 8px;
      font-size: 18px;
   }
`

export const Label = styled.h3`
   display: block;
   font-size: 12px;
   text-transform: uppercase;
   margin-bottom: 8px;
   font-weight: 600;
`