import React, { Component } from 'react';
import { AppRegistry, View, Image, Text, ImageBackground, StyleSheet} from 'react-native';



class Wellcome extends Component{
  render(){
    return <Text style={styles.content}>{this.props.message}</Text>;
  }
}

export default class FirstApp extends Component {


  render() {
    return <View>
        <Image style={{ width: "100%", height: 120 }} source={require("./images/logo.png")} />

      <View style={styles.bgText}>
          <Wellcome message="CÔNG TY TNHH CÔNG NGHỆ PHẦN MỀM REDTIGER" />
          <Wellcome  message="Địa chỉ: Số 8C, Ngõ131, Pháo Đài Láng, Đống Đa, Hà Nội" />
          <Wellcome  message="Điện thoại: (Mr. Thái) 0967 048 347" />
          <Wellcome  message="Email: thietkewebtiger@gmail.com" />
        </View>
      </View>;
  }
}

const styles = StyleSheet.create({
  bgText: {
    backgroundColor: "#383c45"
  },
  content: {
    color: "white",
    
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent("FirstApp", () => FirstApp);
