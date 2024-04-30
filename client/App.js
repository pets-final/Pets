
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen  </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Second')}>
        <Text>
          navbb
        </Text>
      </TouchableOpacity>
    </View>
  );
}
function Second({navigation}) {
  return (
    <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center', backgroundColor:"ffb345" }}>
      <Text>Home 2  </Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text style={{color:"red", fontSize:20 }}
        onPress={()=>{alert("Home")}}
        >
          Please subscribe
        </Text>
    

      </TouchableOpacity>
    </View>
    
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }}  name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }}  name="Second" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;