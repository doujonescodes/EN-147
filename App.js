import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import SocialButtons from './components/FBSocialButtons';


export default function App() {
  console.log({uri:'./assets/splash.png'});
  return (
    <View style={styles.container}>
      <Image
      source=
      {{uri:'./assets/splash.png'}}
      />
     <SocialButtons />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
