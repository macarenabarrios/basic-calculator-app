import { useState } from 'react';
import GlobalStyle1 from "./styles/theme1";
import GlobalStyle2 from "./styles/theme2";
import GlobalStyle3 from "./styles/theme3";
import {
  Container,
  Header,
  WrapperSwitch,
  Switch,
  SwitcherContainer,
  Switcher
} from './App.style'

function App() {

  return (
    <>
      {<GlobalStyle1 />}
      <Container>
        <Header>
          Calc

          <WrapperSwitch>
            theme
            <Switch>
              <div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>

              <SwitcherContainer>
                <Switcher />

              </SwitcherContainer>

            </Switch>

          </WrapperSwitch>
        </Header>
      </Container>

    </>
  )
}

export default App
