import styled from "styled-components"

export const Intructions = styled.section`
   margin-right: 24px;
   min-width: 200px;
   h3 {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 1rem;     
      text-transform: uppercase; 
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
  span {
      font-size: 84px;
      margin: 0 48px;
   }
`

export const FormWrapper = styled.div`
  display: block;
  width: 260px;
`

export const Buttom = styled.button` 
   margin: 0 auto;
   background: #3269F2;
   font-size: 14px;
   border-radius: 30px;
   border: none;
   padding: 16px 32px;
   color: #fff;
   display: flex;
   align-items: center;
   box-shadow: 0 1px 3px hsla(0, 0%, 0%, .2);
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