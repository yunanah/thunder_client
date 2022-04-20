import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import {useSelector, useDispatch} from 'react-redux';
import {ApplicationState, onLogin} from '../../redux';

const Login: React.FC = () => {
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const {user, error} = useSelector(
    (state: ApplicationState) => state.userReducer,
  );

  const {token} = user;

  const onTabLogin = () => {
    dispatch(onLogin(phone));
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="핸드폰 번호" onChangeText={setPhone} />
      <Button onPress={onTabLogin}>다음</Button>
    </View>
  );
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
