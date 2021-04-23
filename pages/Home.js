import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import {  
  ScrollView, 
  StyleSheet, 
  Button, 
  View, 
  SafeAreaView, 
  Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Home = ({navigation}) => {

  return (
    <SafeAreaView style={{
        flex: 1,    
        flexGrow: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        marginTop:10,
      }}>
    
        <View style={{ marginTop: 5 }}>
            <Button title="Open Offerwall (adslotName)" style ={{marginTop: 5}} onPress={() =>  navigation.navigate('Offerwall')}/>
        </View>
        <View style={{ marginTop: 5 }}>
            <Button title="Open Another Offerwall (adslotId) " style ={{marginTop: 5}} onPress={() =>  navigation.navigate('AnotherOfferwall')}/>
        </View>
    </SafeAreaView>
  );
}





export default Home;


