import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function NotifcationComponent() {
    return (
        <View style={styles.container}>

            <View style={styles.infoContainer}>
                <Entypo name="notification" size={24} color="black" style={{ marginRight: 20 }} />
                <View>
                    <Text style={styles.title}>30%</Text>
                    <Text style={styles.subTitle}>dsfsadf</Text>
                </View>
            </View>

            <TouchableOpacity>
                <AntDesign name="delete" size={24} color="black" />
            </TouchableOpacity>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 15,
        height: 62,
        width: '95%',
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.00,

        elevation: 1,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 12,
        fontWeight: '300'
    }
})