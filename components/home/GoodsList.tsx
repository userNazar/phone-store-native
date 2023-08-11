import { FlatList, View } from 'react-native'
import React, { memo, useEffect, useState } from 'react'
import { useAppSelector } from '../../store/hooks'
import CardItem from '../common/CardItem'
import SpinnerOverlay from 'react-native-loading-spinner-overlay';

interface GoodsProps {
    sortByName: string;
}

const GoodsList = memo(function GoodsList({ sortByName }: GoodsProps) {
    const { list } = useAppSelector(state => state.products)
    const [currentList, setCurrentList] = useState(list.map(prod => prod))

    useEffect(() => {
        setCurrentList(list)
    }, [list])

    useEffect(() => {
        if (sortByName !== 'All') {
            setCurrentList(list.filter(prod => prod.name.includes(sortByName)))
        } else {
            setCurrentList(list)
        }
    }, [sortByName])

    return (
        <View>
            <FlatList
                style={{ paddingHorizontal: 30, marginTop: 10 }}
                data={currentList}
                renderItem={({ item }) => <CardItem item={item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                contentContainerStyle={{ paddingBottom: 360 }}
            />
            {currentList.length < 1 && (
                <SpinnerOverlay
                    visible={true}
                    textContent={'Loading...'}
                    textStyle={{ color: '#FFF' }}
                    overlayColor={'rgba(0, 0, 0, 0.5)'}
                />
            )}
        </View>
    )
})


export default GoodsList

