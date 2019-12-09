import styled from "styled-components"
import media from "styled-media-query"

export const FilterWrapper = styled.div`
  margin-bottom: 24px;
  display:flex;
  align-items: center;

  ${media.lessThan('large')`
    font-size: 14px;
  `}

  span {
    margin-right: 0.6rem;
    color: #303446;
  }

  label {
    position: relative;
    display: block;
    width: 150px;
    z-index: 10;
    border: 1px solid #CED5DB;
    border-radius: 5px;

    ${media.lessThan('large')`
      width: 130px;
    `}

    &:after {
      position: absolute;
      right: 0;
      top: 0;
      width: 30px;
      height: 100%;
      line-height: 1.75rem;
      content: "˅";
      text-align: center;
      color: #000;
      font-size: 12px;
      border-left: 1px solid #CED5DB;
      z-index: -1;
    }
  }

  select{
    border: none;
    outline: none;
    background: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    margin: 0;
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 12px;
    color: #000;
    font-weight: bold;

  }
`

export const TableWrapper = styled.div`
    display: block;
    width: 100%;
    ${media.lessThan('large')`
      overflow: auto;
    `}
`

export const Table = styled.table`
  width: 100%;
  font-size: 16px;

  ${media.lessThan('large')`
    font-size: 14px;
  `}

  th {
    text-align: left;
    color: #949494;
    padding-bottom: 1rem;
    font-size: 14px;
    font-weight: bold;
  }

  td {
    border-top: 2px solid #F2F4F6;
    border-bottom: 2px solid #F2F4F6;
    padding: 1rem 1rem ;
    color: #303446;
    vertical-align: middle;

    &.position {
      font-size: 36px;
    }

    .td-icon {
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.5rem;
      }
    }

    a{
      color: #3269F2;
      display: flex;
      align-items: center;
      font-size: 14px;

      span {
        margin-left: 1rem;
      }
    }
   
  }

  img {
    max-width: 3rem;
    overflow: hidden;
    border-radius: 3rem;
  }

`