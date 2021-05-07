import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/AppTheme';

export const App = () => {
  return (
    <SafeAreaView style={ styles.container }>
      <StatusBar barStyle='light-content' />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}