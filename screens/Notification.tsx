import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import NotifcationComponent from '../components/notification/NotifcationComponent';

export default function Notification() {

  const navigation = useNavigation();
  const route = useRoute();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 20 }}>
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Notification</Text>
      </View>

      <View style={styles.alerts}>
        <Text style={styles.alertTitle}>Your alerts: </Text>

        <View style={styles.alertsElements}>
          <NotifcationComponent />
          <NotifcationComponent />
          <NotifcationComponent />
          <NotifcationComponent />
          <NotifcationComponent />
          <NotifcationComponent />
          <NotifcationComponent />
          <NotifcationComponent />
        </View>
      </View>
    </View>

  )
}



const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  alerts: {
    marginTop: 10
  },
  alertTitle: {
    fontSize: 15,
    fontWeight: '500'
  },
  alertsElements: {
    marginTop: 10,
    alignItems: 'center'
  }
})