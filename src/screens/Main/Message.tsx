import React from 'react';
import {View, StyleSheet} from 'react-native';

const Message: React.FC = () => {
  // const {navigation} = props;

  return <View style={styles.container}>메시지</View>;
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

export default Message;
