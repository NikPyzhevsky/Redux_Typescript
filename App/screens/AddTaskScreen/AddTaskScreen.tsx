import * as React from 'react';


import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from "react-native"
import { TextInput } from "react-native-paper"


import { AddTaskScreenProp } from '../../navigation/types';
import { useNavigation } from '@react-navigation/core';

import { useAppDispatch } from '../../store/index'
import { AddItem } from "../../store/actions/ToDoListActions"
import { Icon } from '../../assets';




const BORDER_COLOR = "gray"
const BACKGROUND_COLOR = "white"
const TEXT_COLOR = "black"
const HEIGHT = 54
const TITLE_SIZE = 20

const theme = {
    colors: {
        text: TEXT_COLOR, primary: 'gray'
    }
}



const TodoListScreen: React.FC = () => {
    const [InputText, SetText] = React.useState("")
    const [Error, setError] = React.useState(false)
    const navigation = useNavigation<AddTaskScreenProp>();
    const dispatch = useAppDispatch()

    const SubmitHandler = () => {
        if (InputText.length > 1) {
            setError(false)
            dispatch(AddItem(InputText))
            SetText("")
            navigation.navigate('Home')
        }
        else {
            setError(true)
        }

    }

    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.header}>
                <View style={styles.Title}>
                    <Text style={styles.Title}>What do you want to do?</Text>
                </View>


                <View style={styles.container}      >
                    <TextInput
                        label={"Enter item to do"}
                        value={InputText}
                        onChangeText={SetText}
                        underlineColor={"transparent"}
                        theme={theme}
                        error={Error}
                        style={{
                            backgroundColor: BACKGROUND_COLOR, height: HEIGHT, textDecorationColor: TEXT_COLOR, fontSize: TITLE_SIZE,
                        }}
                    />
                </View>
            </View>


            <View style={styles.PlusContainer}>
                <TouchableOpacity style={styles.Plus} onPress={SubmitHandler}>
                    <Icon />
                </TouchableOpacity>
            </View>



        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        // justifyContent: 'space-between',
        backgroundColor: BACKGROUND_COLOR,
        // alignItems:'center'
    },
    header: {
        // marginTop: 54,
    },
    container: {
        overflow: 'hidden',
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 10,
        borderColor: BORDER_COLOR,
        backgroundColor: BACKGROUND_COLOR,
        height: HEIGHT,
        margin: 24,
    },
    CustomContainer: {
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 10,
        borderColor: BORDER_COLOR,
        backgroundColor: BACKGROUND_COLOR,
        height: HEIGHT,
    },
    Title: {
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:36,
    },
    Plus: {
        width: 250,
        height: 250,
        borderRadius: 250,
        backgroundColor: 'gray',
        bottom: 10,
        right: 10,
    },
    PlusContainer: {
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 260,
        // position: 'absolute',

    }
});

export default TodoListScreen;