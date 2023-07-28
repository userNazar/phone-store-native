import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CardItem from '../common/CardItem'

export default function GoodsHome() {
  const [activeCategorie, setActivCategorie] = useState(1)
  const [categories] = useState([
    { id: 1, title: 'All', active: false },
    { id: 2, title: 'Redmi', active: false },
    { id: 3, title: 'Iphone', active: false },
    { id: 4, title: 'Oppo', active: false },
    { id: 5, title: 'Samsung', active: false },
  ]);

  const data = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 3' },
    { id: 5, title: 'Item 3' },
    { id: 6, title: 'Item 3' },
    { id: 7, title: 'Item 3' },
    { id: 8, title: 'Item 3' },
  ];

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontWeight: '600', fontSize: 18, }}>
          Most Popular
        </Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: '300', fontSize: 18, }}>
            See all
          </Text>
        </TouchableOpacity>
      </View>


      <View style={styles.container}>
        {
          categories.map(cat =>
            <TouchableOpacity
            key={cat.id}
              style={{
                ...styles.filterElement,
                backgroundColor: activeCategorie === cat.id ? 'black' : 'white'
              }}
              onPress={() => setActivCategorie(cat.id)}
            >
              <Text style={{ ...styles.textFilterElement, color: activeCategorie === cat.id ? 'white' : 'black' }}>{cat.title}</Text>
            </TouchableOpacity>
          )
        }
      </View>

      <FlatList
        style={{ paddingHorizontal: 30, marginTop: 10 }}
        data={data}
        renderItem={({ item }) => <CardItem />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  filterElement: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    width: 58,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textFilterElement: {
    fontWeight: '600',
    fontSize: 10
  },
})