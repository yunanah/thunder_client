import React from 'react';
import {View, StyleSheet} from 'react-native';

const Map: React.FC = () => {
  // const {navigation} = props;

  return <View style={styles.container}>지도</View>;
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

export default Map;
