import styled from "styled-components"

export const FilterWrapper = styled.div`
  margin-bottom: 3rem;
  display:flex;
  align-items: center;

  span {
    margin-right: 0.6rem;
    color: #303446;
  }

  label {
    position: relative;
    display: block;
    width: 150px;
    z-index: 10;
    border: 1px solid #DFDFDF;
    border-radius: 5px;

    &:after {
      position: absolute;
      right: 0;
      top: 0;
      width: 50px;
      height: 100%;
      line-height: 2rem;
      content: "˅";
      text-align: center;
      color: #000;
      font-size: 1rem;
      border-left: 1px solid #DFDFDF;
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
    padding: 0.4rem 3.2rem 0.4rem 0.5rem;
    font-size: 1rem;
    color: #000;
    font-weight: bold;
  }


`

export const Table = styled.table`
  width: 100%;
  font-size: 1rem;

  th {
    text-align: left;
    color: #949494;
    padding-bottom: 1rem;
    font-size: 0.9rem;
    font-weight: bold;
  }

  td {
    border-top: 2px solid #E8EAEF;
    border-bottom: 2px solid #E8EAEF;
    padding: 1rem 0;
    color: #303446;
    vertical-align: middle;

    &.position {
      font-size:2rem;
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
      font-size: 0.9rem;

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