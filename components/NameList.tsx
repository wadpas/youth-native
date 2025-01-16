import React from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'

const FlatListBasics = () => {
  let windowWidth = Dimensions.get('window').width

  const columnsNum = Math.floor(Math.min(windowWidth, 1536) / 200)

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={columnsNum}
        keyExtractor={(item) => item.key}
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        columnWrapperClassName='justify-between bg-white'
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  )
}

export default FlatListBasics

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  item: {
    padding: 10,
    margin: 8,
    fontSize: 18,
    width: '100%',
    flex: 1,
    backgroundColor: 'red',
  },
})
