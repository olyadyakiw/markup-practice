import Switcher from "./Switcher"
import Card from "./Card"

import { ContentWrapper } from "./styled/global/ContentWrapper.styled"
import { CardsGrid } from "./styled/Cards.styled"

const Content = () => {
  return (
    <ContentWrapper>
      <Switcher />

      <CardsGrid>
        <Card title='New air routes that promise cheap flights in' name="Gregory Watkins" />
        <Card title='New air routes that promise cheap flights in' name="Gregory Watkins" />
        <Card shared="true" title='New air routes that promise cheap flights in' name="Gregory Watkins" />
        <Card shared="true" weblink="true" title='New air routes that promise cheap flights in' name="Gregory Watkins" />
      </CardsGrid>

    </ContentWrapper>
  )
}

export default Content