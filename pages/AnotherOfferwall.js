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

const AnotherOfferwall = ({navigation}) => {
  const onClose = () => {
    navigation.navigate('Home');
  };

  return (
    <AyetOfferwall userId="user12344422" adslotId="3647" onClose={onClose} />
  );
};

export default AnotherOfferwall;
