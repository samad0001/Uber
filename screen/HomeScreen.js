import { StyleSheet, Text, View ,SafeAreaView ,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOption from '../components/NavOption';


const HomeScreen = () => {
  return (
    <SafeAreaView>
<View style={tw`p-6`}>
  <Image
  style={{
    width:100,
    height:100,
    resizeMode:'contain'
  }}
  source={{
    
    uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1280px-Uber_logo_2018.svg.png'

  }}
  />

  <NavOption />
</View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})