import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1136px;
  margin: 3.2rem auto;
`

export const Wrapper = styled.div`
  padding-left: 2rem;
  width: 85%;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: 
    "filter order order order"
    "filter card card card"
`