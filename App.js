import { StyleSheet, View , Text} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/store';
import HomeScreen from './screen/HomeScreen';

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
  
     </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center'
  }
});
