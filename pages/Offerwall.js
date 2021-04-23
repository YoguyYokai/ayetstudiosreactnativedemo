import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import {  
  ScrollView, 
  StyleSheet, 
  Button, 
  View, 
  SafeAreaView, 
  Text } from 'react-native';
import { AyetOfferwall }  from 'ayetsdk';
import { NavigationContainer } from '@react-navigation/native';


const Offerwall = ({navigation}) => {

  const onClose = () => {
    navigation.navigate('Home')
  }

  return (
      <AyetOfferwall 
      userId = 'user12344422'
      adslotName = 'ow_demo'
      appKey = 'de77f94a0488d8c04cc66664c2613fb7'
      onClose = { onClose } 
      />
  );
}


export default Offerwall;


