import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    AddNewTask: undefined;
};

export type AddTaskScreenProp = StackNavigationProp<RootStackParamList, 'AddNewTask'>;

export type mainScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;
