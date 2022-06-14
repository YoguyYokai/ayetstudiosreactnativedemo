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
import {AyetOfferwall} from 'ayetsdk';
import {NavigationContainer} from '@react-navigation/native';

const Offerwall = ({navigation}) => {
  const onClose = () => {
    navigation.navigate('Home');
  };

  return (
    <AyetOfferwall
      userId="user12344422"
      adslotName="universalWeb001"
      appKey="05d3cdd8553d4b6b907689da2cb786be"
      onClose={onClose}
    />
  );
};

export default Offerwall;
