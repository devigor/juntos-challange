import styled from 'styled-components'

export const CardWrapper = styled.div`
  grid-area: card;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  padding: 1.6rem;
`

export const CardBox = styled.div`
  width: 272px;
  height: 310px;
  border: 1px solid #E5E5E5;
  border-radius: .4rem;
`

export const CardInside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  width: 240px;
  height: 230px;
  text-align: center;
`

export const CardImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #E5E5E5;
`

export const CardName = styled.p`
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  line-height: 26px;
  color: #222D39;
`

export const CardStreet = styled.p`
  font-size: 1.4rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 24px;
  color: #222D39;
`

export const CardAddress = styled.p`
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 16px;
  color: #222D39;
  width: 114px;
`