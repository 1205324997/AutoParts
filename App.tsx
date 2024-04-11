import {Text, SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView>
        <Text>Hola Mundo</Text>
      </SafeAreaView>
    </PaperProvider>
  );
};
