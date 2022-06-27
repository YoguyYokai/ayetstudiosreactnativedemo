import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Offerwall from './pages/Offerwall';
import AnotherOfferwall from './pages/AnotherOfferwall';
import Home from './pages/Home';

const Stack = createStackNavigator();

const App = ({}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={Home}
          />
          <Stack.Screen
            name="Offerwall"
            options={{headerShown: false}}
            component={Offerwall}
          />
          <Stack.Screen
            name="AnotherOfferwall"
            options={{headerShown: false}}
            component={AnotherOfferwall}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
