import styled from "styled-components"

import media from "styled-media-query"
  


export const FormWrapper = styled.form`

   ${media.lessThan('large')`
      width: 100%;
   `}

   label {
      display: block;
      font-size: 12px;
      text-transform: uppercase;
      margin-bottom: 8px;
      font-weight: 600;
   }
`

export const InputWrapper = styled.div`
input {
   height: 40px;
   border: 1px solid #E8ECEF;
   border-radius: 10px;
   padding: 4px 12px;
   box-sizing: border-box;
   margin-right: 12px;
   box-shadow: inset 0 2px 2px hsla(0, 0%, 0%, 0.1);

   ${media.lessThan('large')`
      width: 80%;
   `}
}

button {
   cursor: pointer;
   height: 40px;
   width: 40px;
   border: none;
   background: #E3EAFD;
   color: #1969D0;
   border-radius: 30px;
   box-shadow: 0 1px 3px hsla(0, 0%, 0%, .2);
}
`  