import {View, SafeAreaView} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CertPresenter: React.FC<{onPressNextButton: () => void}> = ({
  onPressNextButton,
}) => {
  // 뷰

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={onPressNextButton} />
      </View>
    </SafeAreaView>
  );
};

export default CertPresenter;
