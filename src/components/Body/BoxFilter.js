import styled from 'styled-components'

export const BoxFilter = styled.div`
  grid-area: filter;
  width: 21rem;
  height: 40rem;
  border: 1px solid #E5E5E5;
  padding: 1.4rem 2.7rem;
`

export const FilterTitle = styled.h3`
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 24px;
  color: #222D39;
`

export const OptionsBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const CheckBox = styled.input`
  width: 1.8rem;
  height: 1.8rem;
  border: 4px solid #4A4A4A;
  cursor: pointer;
`

export const CheckLabel = styled.label`
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 28px;
  color: #222D39;
  cursor: pointer;
`