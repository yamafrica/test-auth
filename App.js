import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Realm from 'realm'

const APP_ID = 'yam-test-mmyuz'

const TOKEN = '...'

const app = new Realm.App({ id: APP_ID })

export default function App() {
  const onPress = async () => {
    console.log('pressed')

    console.log('creating creds')
    // const creds = Realm.Credentials.jwt(TOKEN)
    const creds = Realm.Credentials.anonymous()

    console.log('created creds', creds, creds.payload)

    try {
      const user = await app.logIn(creds)
      
      console.log('-user', user)
    } catch (e) {
      console.log('eee', e)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <Button title="Click" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
