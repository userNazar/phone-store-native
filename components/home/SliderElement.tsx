import { View, Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import { IOffers } from '../../interfaces'




export default function SliderElement({ img, percent, description }: IOffers) {
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.textPercent}>{percent}%</Text>
                <Text style={styles.textTitle}>Special Today</Text>
                <Text style={styles.textDescription}>
                    {description.length >= 60 ? description.slice(69) + '...' : description}
                </Text>
            </View>

            <View>
                <Image source={{ uri: img }} style={{ width: 90, height: 120 }} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 120,
        paddingHorizontal: 20,
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textPercent: {
        fontSize: 27,
        fontWeight: '600'
    },
    textTitle: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 3
    },
    textDescription: {
        fontSize: 12,
        width: 160,
        marginTop: 3
    }
})