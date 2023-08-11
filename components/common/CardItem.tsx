import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Product } from '../../interfaces';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addToList, removeFromList } from '../../store/slicers/productsWishList';

interface CardItemProps {
    item: Product;
    likedProp?: boolean
}

export default function CardItem({ item, likedProp }: CardItemProps) {

    const { listWish } = useAppSelector(state => state.productsWish)

    const [liked, setLike] = useState<boolean>(likedProp ? likedProp : false);

    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    const dispatch = useAppDispatch()


    const likeHandler = () => {
        if (liked) {
            dispatch(removeFromList(item.id))
        } else {
            dispatch(addToList(item))
        }
        setLike(prev => !prev)
    }

    useEffect(() => {
        if (listWish.filter(el => el.id === item.id).length === 1) {
            setLike(true)
        } else {
            setLike(false)
        }
    }, [listWish])


return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Item', { id: item.id, liked })}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: item.img }} />

            <TouchableOpacity onPress={likeHandler} style={{ height: 30, width: 30 }}>
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
            <Text style={styles.textDescription}>{item.name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialIcons name="star-half" size={24} color="black" />
                <Text style={{ marginLeft: 5 }}>{item.rating}</Text>
            </View>
            <Text style={styles.textDescription}>Price: {item.price}$</Text>
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