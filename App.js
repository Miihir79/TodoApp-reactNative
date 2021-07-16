import React,{useState} from 'react';
import { FlatList, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task,setTask]=useState();

  const [taskItems, setTaskItems]= useState([]);

  const [clicks, setClicks]= useState();
  const [isPressed, setIsPressed]= useState(false);

  const handleAddTask=()=>{
    
    setTaskItems([...taskItems,task])
    setTask(null);
  }

  const expandForDelete=(index)=>{

    if(isPressed){
      setClicks(null)
    }
    return(    
    <TouchableOpacity key={index} >
      <View style={styles.deleteHolder}>
        <Text style={styles.delete} onPress={()=> completedTask(index)}>Completed</Text>
        </View>
    </TouchableOpacity>  
    )
       
  }

  const completedTask=(index)=>{
    let itemCopy =[...taskItems];
    itemCopy.splice(index,1); 
    setTaskItems(itemCopy)
    setClicks(null)
    setIsPressed(!isPressed)
  }

  return (
    <View style={styles.container}>
      {/* Today's Tasks */}

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Today's Tasks </Text>
        <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.items}>
            {/* Task will be called here */}
            {
              taskItems.map((item, index)=>{
                return(
                <TouchableOpacity key={index} onPress={()=> {setClicks(index); setIsPressed(!isPressed);}}>
                  {/* to check if item has some text or not and to avoid null entries */}  
                  {                                    
                    item!= null && <Task text={item}/>
                  }    
                  {/* for that perticular index which is clicked to only be added with the remove button */}                  
                    {
                      clicks === index && expandForDelete(index)
                    }
                        
                    
                  </TouchableOpacity>
                );
              })
            }
          </View>
        </ScrollView>
      </View>

      {/* Keyboard */}
      <KeyboardAvoidingView behavior={Platform.OS ==="ios"?"padding":"height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Write A Task "}  value={task} onChangeText={text=> setTask(text)}/>
        <TouchableOpacity 
          onPress={ ()=> handleAddTask() }>

          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>

        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',   
  },

  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20
  },

  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },

  items:{
    marginBottom:3
  },

  writeTaskWrapper:{
    position:'absolute',
    bottom:20,
    width:"100%",
    flexDirection:'row',
    justifyContent:"space-around",
    alignItems:'center'
  },

  input:{
    paddingVertical:10,
    maxWidth: 250,
    paddingHorizontal:15,
    backgroundColor:"#fff",
    borderRadius:60,
    width:250,
    borderColor:"#C0C0C0",
    borderWidth:1
  },

  addWrapper:{
    width:55,
    height:55,
    backgroundColor:"#fff",
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:"#C0C0C0",
    borderWidth:1,    
  },

  ScrollView:{
    marginTop:30,
    height: "80%"
  },

  addText:{
    fontSize:20
  },
  deleteHolder:{
    backgroundColor:"#fff",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    top:-7,
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:5
  },
  delete:{
    color: "#ff0000",
    fontSize:18,
    paddingBottom:5  
  },
});
