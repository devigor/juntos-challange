/* eslint-disable react/prop-types */
import { Container, Wrapper, Grid } from './Wrapper'
import { SpanPath } from './SpanPath'
import { Title } from './Title'
import { BoxFilter, FilterTitle, OptionsBox, CheckWrapper, CheckBox, CheckLabel } from './BoxFilter'
import { BoxOrder, OrderWrapper, OrderText } from './BoxOrder'
import { CardWrapper, CardBox, CardInside, CardImage, CardName, CardStreet, CardAddress } from './CardList'




export const CardComponent = ({
  image,
  firstName,
  lastName,
  location
}) => {
  return (
    <>
      <CardBox>
        <CardInside>
          <CardImage src={image} />
          <CardName>{ firstName } { lastName }</CardName>
          <CardStreet>
            { `${location.street.slice(5)}, ${location.street.slice(0, 5)}` }
          </CardStreet>
          <CardAddress>
            {
              `${location.city} ${location.state}
              CEP: ${location.postcode}`
            }
          </CardAddress>
        </CardInside>
      </CardBox>
    </>
  )
}

export {
  Container,
  Wrapper,
  Grid,
  SpanPath,
  Title,
  BoxFilter,
  FilterTitle,
  OptionsBox,
  CheckBox,
  CheckWrapper,
  CheckLabel,
  BoxOrder,
  OrderText,
  OrderWrapper,
  CardWrapper,
}