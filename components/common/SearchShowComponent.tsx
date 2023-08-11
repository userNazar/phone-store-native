import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Product } from '../../interfaces';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { addToHistory, removeAllFromHistory, removeFromHistory } from '../../store/slicers/productsWishList';
import { AntDesign } from '@expo/vector-icons';

interface SearchedShowComponentProps {
  searchInput: string;
  setSerchInput: Dispatch<SetStateAction<string>>
}

export default function SearchedShowComponent({ searchInput, setSerchInput }: SearchedShowComponentProps) {

  const { historyList, listWish } = useAppSelector(state => state.productsWish)
  const [found, setFound] = useState<Product[]>([])

  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const dispatch = useAppDispatch()

  useEffect(() => {
    setFound(listWish.filter(el => el.name.toLocaleLowerCase().trim().includes(searchInput.toLocaleLowerCase())))
  }, [searchInput])

  function foundElementHandler(el: Product) {
    navigation.navigate('Item', { id: el.id, liked: true })
    dispatch(addToHistory(searchInput))
  }

  const deleteHistoryHandler = (e: GestureResponderEvent, el: string ) => {
    e.preventDefault()
    dispatch(removeFromHistory(el))
  }


  return (
    <>
      {
        searchInput.length
          ?
          <>
            <View style={styles.header}>
              <Text style={styles.textTitle}>Results for “{searchInput}”</Text>
              <Text style={styles.textTitle}>{found.length} founds</Text>
            </View>
            <View>
              {
                found.length === 0
                  ?
                  <Text style={styles.textEmpty}>No found</Text>
                  :
                  found.map(el =>
                    <TouchableOpacity style={styles.foundElement} key={el.id} onPress={() => foundElementHandler(el)}>
                      <Text>{el.name}</Text>
                    </TouchableOpacity>)
              }
            </View>

          </>


          :
          <>
            <View style={styles.header}>
              <Text style={styles.textTitle}>Recent</Text>
              <TouchableOpacity onPress={() => dispatch(removeAllFromHistory())}>
                <Text style={styles.btnClear}>Clear all</Text>
              </TouchableOpacity>
            </View>
            <View>
              {
                historyList.length === 0
                  ?
                  <Text style={styles.textEmpty}>Not history here</Text>
                  :
                  historyList.map(el =>
                    <TouchableOpacity style={{ ...styles.foundElement, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} key={el} onPress={() => setSerchInput(el)}>
                      <Text>{el}</Text>


                      <TouchableOpacity onPress={e => deleteHistoryHandler(e, el)}>
                        <AntDesign name="delete" size={20} color="black" />
                      </TouchableOpacity>

                    </TouchableOpacity>)
              }
            </View>
          </>

      }
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingBottom: 15,
  },
  textTitle: {
    fontWeight: '600',
  },
  btnClear: {
    fontWeight: '200',
  },
  foundElement: {
    marginTop: 20
  },
  textEmpty: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: 'gray',
  },

})