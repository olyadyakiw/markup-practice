import { ThemeProvider } from 'styled-components'

import Header from './components/Header'

import { theme } from './components/styled/global/Theme'
import GlobalStyles from './components/styled/global/Global'
import { Container } from './components/styled/global/Container.styled'
import { Button } from './components/styled/global/Button.styled'

function App() {

  return (
    <>
      <ThemeProvider theme = { theme }>

        <GlobalStyles />

        <Header />
        
        <Container>
          <Button>
            <svg>
                <use href="/public/sprite-icons.svg#plus" />
            </svg>
          </Button>
        </Container>

      </ThemeProvider>
    </>
  )
}

export default App
