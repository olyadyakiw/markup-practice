import { ThemeProvider } from 'styled-components'

import Header from './components/Header'
import AddButton from './components/AddButton'
import Profile from './components/Profile'
import Content from './components/Content'

import { theme } from './components/styled/global/Theme'
import GlobalStyles from './components/styled/global/Global'

import { Container } from './components/styled/global/Container.styled'
import { Wrapper } from './components/styled/global/Wrapper.styled'

function App() {

  return (
    <>
      <ThemeProvider theme = { theme }>

        <GlobalStyles />

        <Header />

        <main>
          <Container>
            <AddButton />

            <Wrapper>
              <Profile />
              <Content />
            </Wrapper>


          </Container>
        </main>
        

      </ThemeProvider>
    </>
  )
}

export default App
