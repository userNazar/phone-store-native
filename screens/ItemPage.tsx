import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native'
import { AntDesign, Fontisto, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getById } from '../store/slicers/productsList';
import { addToList, removeFromList } from '../store/slicers/productsWishList';


type RoutreProps = {
    ItemDetail: { id: string, liked: boolean };
};

export default function ItemPage() {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<RoutreProps>>();
    const { id, liked } = route.params


    const [quantityCount, setQuantityCount] = useState(1)
    const [wished, setWished] = useState(liked)
    const { selectedItem } = useAppSelector(state => state.products)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getById(id))
    }, [id])


    if (!selectedItem) {
        return null;
    }

    const likeHandler = () => {
        if (wished) {
            dispatch(removeFromList(id))
        } else {
            dispatch(addToList(selectedItem))
        }
        setWished(prev => !prev)
    }


    const minusQuantityHanlder = () => {
        if (quantityCount <= 0) return;
        else setQuantityCount(prev => --prev)
    }

    const plusQuantityHanlder = () => {
        setQuantityCount(prev => ++prev)
    }

    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: '7%' }}>
                    <AntDesign name="arrowleft" size={30} color="black" />
                </TouchableOpacity>
                <Image style={styles.img} source={{ uri: selectedItem.img }} />
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{selectedItem.name}</Text>
                    <TouchableOpacity onPress={likeHandler}>
                        {
                            wished
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
                    Object.keys(selectedItem.description).map(el =>
                        <View key={el} style={{ flexDirection: 'row', justifyContent: 'space-between', maxWidth: 240 }}>
                            <Text style={{ marginRight: 30, width: 100 }}>{el}</Text>
                            <Text style={{ fontWeight: '600', flex: 1 }}>{`${selectedItem.description[el]}`}</Text>
                        </View>
                    )
                }

                <View style={{ marginTop: 50, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ ...styles.quantityText, marginRight: 20 }}>Quantity</Text>
                    <View style={styles.quantity}>
                        <TouchableOpacity onPress={minusQuantityHanlder}>
                            <AntDesign name="minuscircleo" size={15} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{quantityCount}</Text>
                        <TouchableOpacity onPress={plusQuantityHanlder}>
                            <AntDesign name="pluscircleo" size={15} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ marginHorizontal: 30 }}>
                <Text>Total Price</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{selectedItem.price * quantityCount} $</Text>
            </View>

            <TouchableOpacity style={styles.buttonAdd}>
                <Fontisto name="shopping-bag" size={24} color="white" />
                <Text style={{ color: 'white' }}>Add To Cart</Text>
            </TouchableOpacity>
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
    quantity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        width: 100,
        paddingHorizontal: 15,
        borderRadius: 15
    },
    quantityText: {
        fontWeight: 'bold',
        fontSize: 17
    },
    buttonAdd: {
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        backgroundColor: 'black',
        width: 137,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    }
})