import React from 'react';
import {View, StyleSheet} from 'react-native';

const Splash: React.FC = () => {
  // const {navigation} = props;

  return <View style={styles.container}>splash</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#CCE9BA',
  },
  title: {
    marginBottom: 16,
  },
});

export default Splash;
