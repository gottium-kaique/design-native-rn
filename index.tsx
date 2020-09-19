import React from "react"
import styled from "styled-components/native"
import { RectButton, RectButtonProperties } from "react-native-gesture-handler"

import { 
  StatusBarProps, 
  StatusBar, 
  Platform
} from "react-native"

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`

export const Text = styled.Text`
  color: ${props => props.theme.color ?? "#000"};
`

export const ButtonText = styled(Text)` 
  color: ${props => props.theme.colorInDarkSection};
`

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 12px 20px;
  elevation: 5;
  height: 50px;
  background: ${props => props.theme.background ?? "#fff"};
`

export const HeaderTitle = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.primary ?? "red"};
`

export const Title = styled.Text`
  color: ${props => props.theme.primary ?? "red"};
  font-size: 24px;
`

export const Content = styled.View`
  padding: 20px 25px 0 30px;
`

export const Description = styled(Text)`
  font-size: 20px;
  margin-top: 12px;
`

export const Wrapper = styled.View`
  flex: 1;
`

export const Section = styled.View``

export const Main = styled.View``

const ButtonContain = styled(RectButton)`
  position: absolute;
  padding: 12px 20px;
  background: ${props => props.theme.primary ?? "red"};
  border-radius: 6px;
  margin-top: 12px;
  elevation: 5;
`

const ButtonContainer = styled.View`
  position: relative;
`

export const Button: React.FC <RectButtonProperties> = props => (
  <ButtonContainer>
    <ButtonContain {...props} />
  </ButtonContainer>
)

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#333",
})`
  background: #eee;
  padding: 12px 20px;
  border-radius: 8px;
  margin-top: 12px;
  font-size: 16px;
`

interface AppProps {
  statusBarProps: StatusBarProps
  safeAreaViewProps: any
}

export const App: React.FC <AppProps> = props => {
  return (
    <>
      <StatusBar {...props.statusBarProps}  />
      <SafeAreaView {...props.safeAreaViewProps}>
        {props.children}
      </SafeAreaView>
    </>
  )
}

export const Scroll = styled.ScrollView``

export const Img = styled.Image``

export const ImgBackground = styled.ImageBackground`
`

export const Switch = styled.Switch.attrs({
  trackColor: {
    false: "#ddd",
    true: "#cc0000",
  },
  thumbColor: "red"
})``

export const Inline = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`

export const Center = styled.View`
  align-items: center;
  margin-top: 12px;
`

export const Right = styled.View`
  align-items: flex-end;
  margin-top: 12px;
`

export const Circle = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: ${props => props.theme.background ?? "red"};
`

const Components = {}