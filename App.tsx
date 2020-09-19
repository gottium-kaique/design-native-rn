import React from 'react'
import { Wrapper, Title, Content } from './index'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return (
    <>
      <ThemeProvider theme={{background: "#334", colorInDarkSection: "#fff", color: "#fff", primary: "#00ccaa"}}>
        <Wrapper>
          <Content>
            <Title>
              Welcome to Design Native
            </Title>
          </Content>
        </Wrapper>
      </ThemeProvider>
    </>
  )
}

export default App