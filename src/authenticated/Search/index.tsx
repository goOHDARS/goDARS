/**
 * @file     Search.tsx
 * @author   Zachary Wolfe (zw224021@ohio.edu)
 * @brief    A file for the Search component
 * @date     April 06, 2024
*/

import React, { ReactNode, useState } from "react";
import { View, StyleSheet, Text, Platform, ScrollView, SafeAreaView, TextInput, FlatList, StatusBar} from "react-native";


export default function Search(){
  const [search, setSearch] = useState("");
  const handleSearch = (search:any) => {
    setSearch(search);
    const formatSearch = search.toUpperCase();
  }

  
  const info = [{name:"CS2400", GPA:3}, {name:"CS2400", GPA:3}, {name:"CS2400", GPA:3}, {name:"CS2400", GPA:3}, {name:"CS2400", GPA:3}, {name:"CS2400", GPA:3}, {name:"CS2400", GPA:3}, {name:"CS2400", GPA:3}];


  return (
    <ScrollView keyboardShouldPersistTaps = {"never"} showsVerticalScrollIndicator = {true}>
      <SafeAreaView style = {{flex:1, marginHorizontal:20}}>
        <TextInput 
          placeholder= {"Search Course ..."}
          clearButtonMode = {"unless-editing"} 
          style={{paddingHorizontal:20, paddingVertical:10, borderWidth:1, borderRadius:8}} 
          autoCorrect={true} value={search}
          onChangeText={(search) => handleSearch(search)}
        />
          <View style={styles.item}>
            <Text>
              CS2400
            </Text>
            <Text>
              4
            </Text>
          </View>
      </SafeAreaView> 
     </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#E7ECC3',
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
  },

});


// const SwitchComponent: React.FunctionComponent<{}> = () => {
// const [search, setSearch] = useState('');

// const updateSearch = (search:string) => {
//   setSearch(search);
// };




// return (
//     <ScrollView keyboardShouldPersistTaps = {"never"} showsVerticalScrollIndicator = {true}>
//         <View>
//             <SearchBar
//             placeholder={'Search Courses...'}
//             onChangeText={updateSearch}
//             value={search}
//             lightTheme = {true}
//             round = {true}
//             containerStyle = {{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}
//             />
//         </View>
//     </ScrollView>
// );
// };

// const styles = StyleSheet.create({
// view: {
//   margin: 10,
// },
// });

// export default SwitchComponent;