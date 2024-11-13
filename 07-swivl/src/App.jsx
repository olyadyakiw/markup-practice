import { ThemeProvider } from 'styled-components'

import Header from './components/Header'

import { theme } from './components/styled/global/Theme'
import GlobalStyles from './components/styled/global/Global'
import { Container } from './components/styled/Container.styled'

function App() {

  return (
    <>
      <ThemeProvider theme = { theme }>

        <GlobalStyles />

        <Header />
        
        <Container>
          <h1>Hello!</h1>
        </Container>

      </ThemeProvider>
    </>
  )
}

export default App
