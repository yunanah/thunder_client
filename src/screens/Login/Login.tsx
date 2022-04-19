import React from 'react';
import {View, StyleSheet} from 'react-native';

import {useAppSelector, useAppDispatch} from '../../hooks/index';
const Login: React.FC = () => {
  // const {navigation} = props;

  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return <View style={styles.container}>로그인</View>;
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

export default Login;
