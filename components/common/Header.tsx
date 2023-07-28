import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

export default function Header() {

  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Fontisto name="home" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="md-cart-sharp" size={27} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Fontisto name="shopping-store" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#E8E8E8',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})