import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import QRCode from "react-native-qrcode-svg";
class kew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NumberHolder: 1
    };
  }
  forceRemount = () => {};
  GenerateRandomNumber = () => {
    var RandomNumber = Math.floor(Math.random() * 100000000000000000) + 1;
    this.setState({
      NumberHolder: RandomNumber
    });
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{this.state.NumberHolder}</Text>
        <Button
          title="Generate Random Number"
          onPress={this.GenerateRandomNumber}
        />
        <View>
          <QRCode style={{ height: 90, width: 90 }} value="www.wikipedia.com" />
        </View>
      </View>
    );
  }
}

export default kew;
