import { View, StyleSheet, Text } from 'react-native'
import React, { useEffect } from 'react'
import HeaderHome from '../components/home/HeaderHome';
import GoodsHome from '../components/home/GoodsHome';
import SliderCom from '../components/common/SliderCom';
import SliderElement from '../components/home/SliderElement'
import { useAppDispatch } from '../store/hooks';
import { fetchData } from '../store/slicers/productsList';



export default function HomeScreen() {
    const dispatch = useAppDispatch()
    const sliders: any = [
        {
            id: 0,
            img: 'https://images.samsung.com/is/image/samsung/p6pim/cz/2202/gallery/cz-galaxy-s22-s901-sm-s901biddeue-530908340?$650_519_PNG$',
            percent: 10,
            description: 'Get a discount for every order, only for today!!'
        },
        {
            id: 1,
            img: 'https://images.prom.ua/4543187861_apple-iphone-12.jpg',
            percent: 35,
            description: 'fdsfasdfasfsafasdf'
        },
        {
            id: 2,
            img: 'https://static.doji.co/product/medias/smartphones/samsung/galaxy-s22-5g/1-front-back-green.png',
            percent: 30,
            description: 'fdsfasdfasfsafasdf'
        },
        {
            id: 3,
            img: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/pms_1587047612.55534709.png',
            percent: 50,
            description: 'fdsfasdfasfsafasdf'
        },
    ]


    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <View style={styles.container}>
            <HeaderHome />
            <View>
                <Text style={{ paddingHorizontal: 30, marginVertical: 10, fontWeight: 'bold', fontSize: 14 }}>Spesial Offers</Text>
                <SliderCom sliders={sliders} SliderElement={SliderElement} />
            </View>
            <GoodsHome />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})