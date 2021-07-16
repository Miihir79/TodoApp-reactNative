import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

 {/* getting props from App.js */}
const Task =(props)=>{
    return(
        <View style={styles.item}>
           <View style={styles.itemLeft}>
               <View style={styles.square}>

               </View>
               <Text style={styles.itemText}>{props.text}</Text>
           </View>

           <View style={styles.circular}>

           </View>
           
        </View>
    )
}

const styles = StyleSheet.create({

    item:{
        backgroundColor:"#fff",
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:20
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    square:{
        width:24,
        height:24,
        backgroundColor:"#55BCF6",
        opacity:0.4,
        borderRadius:5,
        marginRight:15
    },

    itemText:{
        maxWidth:'80%',

    },
    circular:{
        width:12,
        height:12,
        borderColor:"#55BCF6",
        borderWidth:2,
        borderRadius:5
    }
})
export default Task;