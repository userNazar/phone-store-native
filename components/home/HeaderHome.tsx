import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';


export default function HeaderHome() {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const [searchInput, setSearchInput] = useState('');

    return (
        <>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <TouchableOpacity>
                            <Image style={{ height: 50, width: 50, marginRight: 20 }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Mobile-Smartphone-icon.png' }} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.textSubtitle}>Good Morning</Text>
                        <Text style={styles.textTitle}>Dear Customer!</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={() => navigation.navigate('Notification', {name: 'fsf'})}>
                        {
                            false
                                ?
                                <Ionicons name="notifications" size={24} color="black" />
                                :
                                <Ionicons name="md-notifications-outline" size={24} color="black" />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={() => navigation.navigate('Wishlist')}>
                        <Ionicons name="heart-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.inputContainer}>
                <Ionicons name="ios-search" size={24} color="gray" />
                <TextInput value={searchInput} onChangeText={setSearchInput} style={{ flex: 1, marginLeft: 10 }} placeholder="Search" />
            </View>
        </>

    )
}



const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textSubtitle: {
        fontSize: 12,
    },
    textTitle: {
        fontSize: 17,
        fontWeight: '600'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginHorizontal: 30,
        marginTop: 18
    }
})