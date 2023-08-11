import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import GoodsList from './GoodsList';




export default function GoodsHome() {

  const [activeCategorie, setActivCategorie] = useState(1)
  const categories = [
    { id: 1, title: 'All', },
    { id: 2, title: 'Redmi', },
    { id: 3, title: 'iPhone', },
    { id: 4, title: 'Oppo', },
    { id: 5, title: 'Samsung', },
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


      <GoodsList sortByName={categories[activeCategorie - 1].title}/>

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