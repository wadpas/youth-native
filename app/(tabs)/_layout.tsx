import React from 'react'
import { Tabs } from 'expo-router'
import { Dimensions, Platform } from 'react-native'

import { IconSymbol } from '@/components/ui/IconSymbol'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  let bigScreen = Dimensions.get('window').width > 1036 ? true : false

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarPosition: bigScreen ? 'top' : 'bottom',
        tabBarLabelStyle: {
          overflow: 'visible',
        },
        tabBarStyle: {
          alignItems: bigScreen ? 'center' : 'stretch',
        },
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name='house.fill'
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name='paperplane.fill'
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}
