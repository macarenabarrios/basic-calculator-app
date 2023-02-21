import { useState } from 'react';
import GlobalStyle1 from "./styles/theme1";
import GlobalStyle2 from "./styles/theme2";
import GlobalStyle3 from "./styles/theme3";
import {
  Button,
  ButtonContainer,
  Container,
  Header,
  Input,
  Switch,
  SwitcherContainer,
  Switcher,
  WrapperSwitch,
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
        <Input></Input>
        <ButtonContainer>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
        </ButtonContainer>
      </Container>

    </>
  );
}

export default App
