import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';


export default function CardItem() {

    const [liked, setLike] = useState<boolean>(true);

    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Item', { id: 'test' })}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-13-red-back.png?v=35' }} />

                <TouchableOpacity onPress={() => setLike(prev => !prev)} style={{ height: 30, width: 30 }}>
                    {
                        liked
                            ?
                            <Ionicons name="md-heart-circle" size={30} color="black" />
                            :
                            <Ionicons name="md-heart-circle-outline" size={30} color="black" />
                    }
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.textDescription}>Iphone 14 Pro Max</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name="star-half" size={24} color="black" />
                    <Text style={{ marginLeft: 5 }}>5.4</Text>
                </View>
                <Text style={styles.textDescription}>Price: 2000$</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 131,
        marginVertical: 5
    },
    imageContainer: {
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderRadius: 10,
    },
    image: {
        width: 80,
        height: 160
    },
    textDescription: {
        fontWeight: '600',
        fontSize: 14,
        marginTop: 2
    }
})