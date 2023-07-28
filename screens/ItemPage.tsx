import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';





export default function ItemPage() {

    const navigation = useNavigation();
    const route = useRoute();

    const test = {
        "Display": "6.7\"",
        "Processor": "A16 Bionic",
        "Jaringan": "5G",
        "GPU": "Apple GPU",
        "Memori Internal": "128",
        "Kamera": "48MP",
        "Berat": "240gr",
        "Baterai": "4232mAh",
        "OS": "IOS 16",
        "Brand": "Apple Inc"
    }


    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: '7%' }}>
                    <AntDesign name="arrowleft" size={30} color="black" />
                </TouchableOpacity>
                <Image style={styles.img} source={{ uri: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-13-red-back.png?v=35' }} />
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Iphone 14 Pro Max</Text>
                    <TouchableOpacity>
                        {
                            false
                                ?
                                <AntDesign name="heart" size={25} color="black" />
                                :
                                <AntDesign name="hearto" size={25} color="black" />
                        }
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name="star-half" size={24} color="black" />
                    <Text style={{ marginLeft: 5 }}>5.4</Text>
                </View>
            </View>
            <View style={styles.container}>
                {
                    Object.values(test).map(el =>
                        <View key={el} >
                            <Text>el</Text>
                            <Text>el</Text>
                        </View>

                    )
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        paddingBottom: 15,
        marginHorizontal: 30,
        marginVertical: 10,
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: '#D9D9D9',
    },
    img: {
        height: 230,
        width: 230
    },
})