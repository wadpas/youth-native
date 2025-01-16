import { Image, View, ScrollView, Dimensions } from 'react-native'
import PizzaTranslator from '@/components/PizzaTranslator '
import NameList from '@/components/NameList'
import NameSectionList from '@/components/NameSectionList'

export default function HomeScreen() {
  const windowWidth = Dimensions.get('window').width

  return (
    <ScrollView className='container h-full mx-auto bg-white max-w-screen-2xl '>
      <PizzaTranslator />
      <NameSectionList />
      <NameList />
    </ScrollView>
  )
}
