import styled from 'styled-components'

export const BoxFilter = styled.div`
  grid-area: filter;
  width: 21rem;
  height: 40rem;
  border: 1px solid #E5E5E5;
  padding: 1.4rem 2.7rem;
  border-radius: .4rem;
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

export const CheckWrapper = styled.div`
  height: 85%;
  scroll-behavior: smooth;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
    height: 10px;

  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #c2c9d2;
  }
`

export const CheckBox = styled.input`
  position: relative;
  display: block;
  border-radius: 20%;
  appearance: none;
  border: 2.5px solid #4A4A4A;
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;

  :checked {
    border: 2.5px solid #6200EE;
    background: #6200EE;
    ::after {
      content: '✓';
      position: absolute;
      display: block;
      width: 100%;
      color: #FFF;
      left: 3px;
    }
  }
`

export const CheckLabel = styled.label`
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 28px;
  color: #222D39;
  cursor: pointer;
  text-transform: capitalize;
`