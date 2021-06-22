import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import {DeleteIcon} from "../../../assets/"

type ListComponentProps = {
    id: number,
    item: String,
    done: Boolean,
    ChangeStatus: (value: number) => void,
    DeleteItem: (value: number) => void,
}

const ListComponent: React.FC<ListComponentProps> = ({ id, item, done, ChangeStatus, DeleteItem }) => {
    item.length>20?
        item = item.slice(0,20) + "..."
        :
        null
    
    return (
        <TouchableOpacity style={styles.ListComponentBox} onPress={() => ChangeStatus(id)}>
            <View style={styles.Container}>
                <TouchableOpacity style={styles.deleteItem} onPress={() => DeleteItem(id)} >
                    <DeleteIcon/>
                </TouchableOpacity>
                <Text style={styles.text}>{item}</Text>
            </View>
            <View>
                {done ?
                    <Text style={[styles.text, { color: "green" }]}>Completed</Text>
                    :
                    <Text style={[styles.text, { color: "gray" }]}>Not completed</Text>}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ListComponentBox: {
        marginHorizontal: 24,
        height: 56,
        justifyContent: 'space-between',
        flex: 1,
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "gray",
        flexDirection: "row",
    },
    text: {
        fontSize: 15,
    },
    Border: {
        // borderBottomWidth:1,
        opacity: 0.1,
    },
    Container: {
        // backgroundColor:"red",
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 6,
        // overflow:'hidden',

    },
    deleteItem: {
        backgroundColor: "#D9DDDC",
        height: 40,
        width: 40,
        borderRadius: 40,
        marginRight: 8,
    }
})


export default ListComponent