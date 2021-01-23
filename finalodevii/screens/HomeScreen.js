import React, { useContext,Component} from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import { Container, Header, Content, Left, Body, Right, Title, Tab, Tabs, Button } from 'native-base';
import Tab1 from '../screens/tabOne';
import { abs } from 'react-native-reanimated';


const HomeScreen = ({navigation}) => {
    const {logout} = useContext(AuthContext);

        return (
            <Container>
                <Header style={{ backgroundColor: '#ffae00' }} hasTabs >
                    <Text>EN İYİ HABER SAYFASI</Text>
                </Header>
                <Tabs>
                    <Tab tabStyle={{ backgroundColor: '#ffae00' }}
                        activeTabStyle={{ backgroundColor: '#000000' }}
                        heading="Genel Haberler">
                        <Tab1 />
                    </Tab>
                </Tabs> 
                   <Button  buttonTitle='Logout' onPress={() => logout()} ><Text>ÇIKIŞ YAP</Text></Button>
            </Container>
            
        );
    
}
export default HomeScreen;
const styles = StyleSheet.create({
  
  
})