
import React from "react"
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TodoListScreen, AddTaskScreen } from '../screens';
import { RootStackParamList } from "./types"




const RootStack = createStackNavigator<RootStackParamList>();

const horizontalAnimation = {
  gestureDirection: 'horizontal',
  cardStyleInterpolator: ({ current, layouts }:any) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const MainStack = () => {


  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home"  screenOptions={horizontalAnimation }>
        <RootStack.Screen name="Home" component={TodoListScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="AddNewTask" component={AddTaskScreen} options={{ headerBackTitle:"Back", headerTitle:"New task", headerTintColor:"gray"}} />
      </RootStack.Navigator>
    </NavigationContainer>

  )

}


export default MainStack



