import * as React from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default class AppList2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     header: 'TURKIYE CUMHURİYETİNİN BOLGELERI',
    };
    console.warn('1-constructor run...');
  }

  componentDidMount() {
    console.warn('3-componentDidMount running...');
  }

  

  render() {
    console.warn('2- render is running....');

    
    
    let listData = [
      {id: 1, val: 'MARMARA'},
      {id: 2, val: 'EGE'},
      {id: 3, val: 'AKDENIZ'},
      {id: 4, val: 'KARADENIZ'},
      {id: 5, val: 'IC ANADOLU'},
      {id: 6, val: 'DOGU ANADOLU'},
      {id: 6, val: 'GUNEYDOGU ANADOLU'},
    ];
    
    return (
      <View>
        <Text>header: {this.state.header}</Text>
        <FlatList
            style={styles.flatlistStyle}
          data={listData}
          renderItem={({item}) => (
            <View style={styles.itemView}>
              <Text id={item.id}>{item.val}</Text>
            </View>
          )}
        />

        <Text>BÖLGELERDEKİ ILLER</Text>
        <ScrollView style={styles.scrollStyle}>
          <View style={styles.row}>
            <Text>MARMARA BOLGESINKEDI ILLER:
                Çanakkale, Edirne, Balıkesir, Tekirdağ, Kırklareli,
                 İstanbul, Bursa, Yalova, Kocaeli, Bilecik ve Sakarya</Text>
          </View>

          <View style={styles.row}>
            <Text>EGE BOLGESINKEDI ILLER:
            İzmir,Manisa,Aydın,Denizli,Muğla,Afyonkarahisar,Kütahya,Uşak
            </Text>
          </View>

          <View style={styles.row}>
            <Text>AKDENİZ BOLGESINKEDI ILLER:
            Adana, Antalya, Burdur, Hatay, Isparta, Kahramanmaraş, Mersin, Osmaniye
            </Text>
          </View>

          <View style={styles.row}>
            <Text>KARADENIZ BOLGESINKEDI ILLER:
            Artvin, Rize, Bayburt, Trabzon, Gümüşhane, Giresun, Ordu, Tokat, 
            Amasya, Samsun, Sinop, Çorum, Kastamonu, Bartın, Karabük, Zonguldak, Düzce, Bolu
            </Text>
          </View>

          <View style={styles.row}>
            <Text>IC ANADOLU BOLGESINKEDI ILLER:
            Aksaray, Ankara, Çankırı, Eskişehir, Karaman,
             Kayseri, Kırıkkale, Kırşehir, Konya, Nevşehir, Niğde, Sivas, Yozgat
            </Text>
          </View>

          <View style={styles.row}>
            <Text>DOGU ANADOLU BOLGESINDEKI ILLER:
            Ağrı, Ardahan, Bingöl, Bitlis, Elazığ, Erzincan,
             Erzurum, Hakkari, Iğdır, Kars, Malatya, Muş, Tunceli, Van
            </Text>
          </View>

          <View style={styles.row}>
            <Text>GUNEYDOGU ANADOLU BOLGESINDEKI ILLER:
            Adıyaman, Batman, Diyarbakır, Gaziantep, Kilis, Mardin, Şanlıurfa, Siirt, Şırnak
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }

  

}
const styles = StyleSheet.create({
  row: {
    backgroundColor: 'steelblue',
    height: 80,
    margin: 10,
  },
  scrollStyle: {
    backgroundColor: 'black',
    flex: 1,
    minHeight: 400,
  },
  flatlistStyle:{
    flex: 1,
    minHeight: 300,
  },
  itemView: {
    borderWidth: 1,
    margin: 5,
    padding: 5,
    backgroundColor: 'blue',
  },
});