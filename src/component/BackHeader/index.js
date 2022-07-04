import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

//local import
import styles from './styles';

const Index = ({title, handleBackArrow, img, ...props}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backArrowCont}
        activeOpacity={10}
        onPress={handleBackArrow}>
        <Image source={img} resizeMode="contain" style={styles.backArrow} />
      </TouchableOpacity>

      <Text style={styles.headTxt}>{title}</Text>
    </View>
  );
};

export default Index;
