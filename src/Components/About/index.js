import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {Heading, ScrollView, Text} from 'native-base';
class About extends React.Component {
  render() {
    return (
      <ScrollView style={{padding: 10}}>
        <Heading
          style={{
            textAlign: 'center',
            marginTop: 5,
            fontFamily: 'Copperplate',
          }}>
          Vajrateja Rice Clusters
        </Heading>
        <View style={{height: 240, padding: 10}}>
          <WebView
            javaScriptEnabled={true}
            source={{
              html: '<html><body> <br /> <iframe width="100%" height="515" src="https://youtube.com/embed/xph2IaW8sms" frameborder="0" allowfullscreen></iframe></body></html>',
            }}
          />
        </View>

        <Text style={{fontFamily: 'Georgia', fontSize: 20, padding: 10}}>
          In the pursuance of transforming itself into a global and sustainable
          rice brand, Varjateja shall partner with the farmers of Telangana to
          undertake Sustainable Rice Production practices. Vajrateja believes
          that the small yet our things can make a significa difference to the
          farmers of Telangana. We are working or technologies that are aimed at
          ensuring sustainability in production of rice. In addition to reducing
          water consumption and quantity of seeds required, such technologies
          shall help improve the yield per acre and these technologies will make
          it viable to produce bio-gas, bio-fertilizer and generate energy from
          husk and Rice straw. Vajrateja aims to create a circular economy by
          creating a 360 agrees life cycle of rice production.
        </Text>
      </ScrollView>
    );
  }
}
export default About;
