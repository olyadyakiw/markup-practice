import { Container } from "./styled/global/Container.styled"
import { HeaderStyled, Nav, Logo } from "./styled/Header.styled"

import User from "./User"
import Actions from "./Actions"
import Tabs from "./Tabs"

const Header = () => {
  return (
    <HeaderStyled>
        <Container>
          <Nav>
            <Logo src='/logo.svg' alt='Synth logo' />
            <User />
            <Actions />
          </Nav>
          <Tabs />
        </Container>
    </HeaderStyled>
  )
}

export default Header