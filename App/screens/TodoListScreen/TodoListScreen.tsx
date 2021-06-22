import * as React from 'react';


import { ChangeStatus, DeleteItem } from "../../store/actions/ToDoListActions"
import { FlatList, SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../store/index'
import ListComponent from './components/ListComponent';
import { TouchableOpacity } from "react-native"
import { mainScreenProp } from '../../navigation/types';
import { useNavigation } from '@react-navigation/core';
import { Icon, NullIcon } from '../../assets';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';



const BORDER_COLOR = "gray"
const BACKGROUND_COLOR = "white"
const HEIGHT = 54





const TodoListScreen: React.FC = () => {

    const listToDO = useAppSelector((state) => state.toDoApp.list);

    const navigation = useNavigation<mainScreenProp>();
    const dispatch = useAppDispatch()

    const ChangeStatusHandler = (id: number) => {
        dispatch(ChangeStatus(id))
    }

    const DeleteItemHandler = (id: number) => {
        dispatch(DeleteItem(id))
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.Title}>
                <Text style={styles.Title}>My ToDo App</Text>
            </View>
            {listToDO.length>0?
            <FlatList
            data={listToDO}
            keyExtractor={(item, key) => (item.item + key).toString()}
            renderItem={(item) => {
                console.log(item)
                return (<ListComponent
                    id={item.item.id}
                    item={item.item.item}
                    done={item.item.done}
                    ChangeStatus={ChangeStatusHandler}
                    DeleteItem={DeleteItemHandler}
                />)
            }}

        />
        :
        <View style={styles.NullContainer}>
            <NullIcon/>
        </View>
        
        }
            
            <TouchableOpacity
                style={styles.PlusContainer}
                onPress={() => navigation.navigate('AddNewTask')}
            >
            <Icon/>
            
            </TouchableOpacity>


        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    safeArea: {
        justifyContent: "center",
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
        // alignItems:'center',

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
        marginBottom: 25,
        marginTop:25,
        // overflow:'hidden',
    },
    PlusContainer: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: 'gray',
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    NullContainer:{
        flex:1,
        paddingHorizontal:25,
    }
});

export default TodoListScreen;