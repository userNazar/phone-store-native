import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


interface SearchedShowComponentProps {
  searchInput: string;
}

export default function SearchedShowComponent({ searchInput }: SearchedShowComponentProps) {
  return (
    <View>
      {
        searchInput.length
          ?
          <View style={styles.header}>
            <Text style={styles.textTitle}>Results for “{searchInput}”</Text>
            <Text style={styles.textTitle}>{0} founds</Text>
          </View>

          :
          <View style={styles.header}>
            <Text style={styles.textTitle}>Recent</Text>
            <TouchableOpacity>
              <Text style={styles.btnClear}>Clear all</Text>
            </TouchableOpacity>
          </View>
      }

    </View>
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
  }

})