import styled from 'styled-components'

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 46rem;
  height: 4.8rem;
  border: 1px solid #B0B0B0;
  border-radius: 32px;
  padding-left: 5rem;
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 28px;
  color: #9B9B9B;
  background: url('/assets/imgs/search.svg') no-repeat scroll 15px 12px;

  &:focus {
    outline: none;
  }
`