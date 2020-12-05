/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
          <View style={styles.body}>

          <Text style={styles.sectionDescription}>
                Ad Soyad:
                 </Text>
                <TextInput style={styles.Text} />
                <Text></Text>
                <Text style={styles.sectionDescription}>Yaş: </Text>
                <TextInput style={styles.Text2} />
                <Text></Text>
                <Text style={styles.sectionDescription}>Şifre: </Text>
                <TextInput style={styles.Text3} />
                <Text></Text>
                <Text style={styles.sectionDescription}>Şifre Tekrar : </Text>
                <TextInput style={styles.Text4} />
                <Text></Text>
                <Text style={styles.sectionDescription}>E-mail : </Text>
                <TextInput style={styles.Text5} />
                <Text></Text>
                <Button title="Kayıt Ol"></Button>
            </View>

    </>
  );
};

const styles = StyleSheet.create({
  Text: {
    position:"absolute",
    top:5,
    left:105,
    borderWidth:1,
    height:35,
    fontSize:15,
    width:200,
    margin:0,
    padding:0,
  },
  Text2: {
    position:"absolute",
    top:55,
    left:105,
    borderWidth:1,
    height:35,
    fontSize:15,
    width:200,
    margin:0,
    padding:0,
  },
  Text3: {
    position:"absolute",
    top:105,
    left:105,
    borderWidth:1,
    height:35,
    fontSize:15,
    width:200,
    margin:0,
    padding:0,
  }, 
  Text4: {
    position:"absolute",
    top:155,
    left:105,
    borderWidth:1,
    height:35,
    fontSize:15,
    width:200,
    margin:0,
    padding:0,
  },
  Text5: {
    position:"absolute",
    top:205,
    left:105,
    borderWidth:1,
    height:35,
    fontSize:15,
    width:200,
    margin:0,
    padding:0,
  },
  
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;