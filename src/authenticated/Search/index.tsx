/**
 * @file     Search.tsx
 * @author   Zachary Wolfe (zw224021@ohio.edu)
 * @brief    A file for the Search component
 * @date     April 06, 2024
*/

import React, { ReactNode, useState } from "react";
import { View, StyleSheet, Text, Platform, ScrollView, SafeAreaView, TextInput, FlatList, StatusBar, Pressable} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Search(){
  const [search, setSearch] = useState("");
  const handleSearch = (search:any) => {
    setSearch(search);
    const formatSearch = search.toUpperCase();
  }

  const [list, setList] = useState([{name:"EE1024", GPA:4}]);
  const info = [{name:"CS2400", GPA:3}, {name:"CS2401", GPA:3}, {name:"CS2400", GPA:3}, {name:"CS2401", GPA:3}, {name:"CS2401", GPA:3}, {name:"CS2401", GPA:3}, {name:"CS2400", GPA:3}, {name:"CS2401", GPA:3}, {name:"CS4000", GPA:3}];



  const selectedList = (Class:string, Num:number) => {
    let x = JSON.stringify({ name:Class, GPA:Num })
    const Template = list.map(item => JSON.stringify(item))
    if (!Template.includes(x)){
      setList(prev => {
        const temp = [...prev]
        temp.push({name: Class, GPA: Num});
        alert("Class Added to List")
        return temp;
      })
      //alert("Class Added to List")
    }
  }



  const removeList = (Class:string, Num:number) => {
    let x = JSON.stringify({ name:Class, GPA:Num })
    const Template = list.map(item => JSON.stringify(item))

    setList(prev => {
      const temp = [...prev]
      temp.filter(item => {
        if (item.name == Class && item.GPA == Num){
          temp.pop();
        }
      });
      alert("Class Removed From List");
      return temp;
    })
  }
    
  

  return (
    <ScrollView keyboardShouldPersistTaps = {"never"} showsVerticalScrollIndicator = {true} contentContainerStyle={{ backgroundColor: "#fff" }} style ={{backgroundColor: "#fff"}}>
      <SafeAreaView style = {{flex:1, marginHorizontal:20, backgroundColor: "#fff"}}>
        <TextInput 
          placeholder= {"Search Course ..."}
          clearButtonMode = {"unless-editing"} 
          style={{paddingHorizontal:20, paddingVertical:10, borderWidth:1, borderRadius:8}} 
          autoCorrect={true} value={search}
          onChangeText={(search) => handleSearch(search)}
        />
        {/* adds items to a list */}
            <FlatList
              data={info}
              renderItem={({item}) => (
                <Pressable onPress={() => selectedList(item.name, item.GPA)}>

                  <View style={styles.item}>
                    <Text> {item.name} {"                                           Credits:"} {item.GPA}</Text>
                  </View>
                
                </Pressable>
              )}>
              
            </FlatList>
          {/* Removes items from a list */}
            <FlatList
              data={list}
              renderItem={({item}) => (
                <Pressable onPress={() => removeList(item.name, item.GPA)}>

                  <View style={styles.item2}>
                    <Text> {item.name} {"                                           Credits:"} {item.GPA}</Text>
                  </View>
                
                </Pressable>
              )}>
              
            </FlatList>
            {/* <Pressable onPress={() => selectedList()}>
              <Text>
              CS2400
              </Text>
              <Text>
                4
              </Text>
            </Pressable> */}
      </SafeAreaView> 
     </ScrollView>
    );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#E7ECC3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item2: {
    backgroundColor: '#EEFFAA',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
  },

});