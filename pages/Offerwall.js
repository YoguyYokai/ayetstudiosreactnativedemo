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
      adslotName="rn_example_001"
      appKey="c5bb63142da01df8ccc11002e16cff42"
      onClose={onClose}
    />
  );
};

export default Offerwall;
