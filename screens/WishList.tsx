import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CardItem from '../components/common/CardItem';
import SearchedShowComponent from '../components/common/SearchShowComponent';


export default function WishList() {


    const timesWISH = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },

        {
            id: 6,
        },
        {
            id: 7,
        },

        {
            id: 8,
        },

    ]

    const [search, setSearch] = useState(false)
    const [searchInput, setSearchInput] = useState('')


    const searchHandler = () => {
        setSearchInput('')
        setSearch(prev => !prev)
    }

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                {
                    search
                        ?
                        <View style={styles.inputContainer}>
                            <Ionicons name="ios-search" size={24} color="gray" />
                            <TextInput value={searchInput} onChangeText={setSearchInput} style={{ flex: 0.9, marginLeft: 10 }} placeholder="Search" />
                        </View>
                        :
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 20 }}>
                                <AntDesign name="arrowleft" size={30} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.title}>WishList</Text>
                        </View>
                }


                <TouchableOpacity style={{ marginTop: 12 }} onPress={searchHandler}>
                    {
                        search
                            ?
                            <AntDesign name="closecircle" size={24} color="black" />
                            :
                            <FontAwesome name="search" size={30} color="black" />
                    }
                </TouchableOpacity>
            </View>


            <View style={{ marginTop: 20 }}>
                {
                    search
                        ?
                        <SearchedShowComponent searchInput={searchInput.trim()} />
                        :
                        <FlatList
                            data={timesWISH}
                            renderItem={({ item }) => <CardItem />}
                            keyExtractor={(item) => item.id.toString()}
                            numColumns={2}
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                        />
                }

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
    headerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60
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