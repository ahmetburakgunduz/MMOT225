import React from 'react';

import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCategoryId: 0
        }

    }


    handlePress = id => {
        this.setState({ selectedCategoryId: id })
    }

    getProductListView() {

        const productList = [
            { name: "~NEYMAR SAKATLANDI~", cateId: 1 },
            { name: "Paris Saint Germain forması giyen Neymar, mücadelenin son bölümlerinde korkunç bir sakatlık yaşadı. Brezilyalı yıldız oyuncu, 90+6. dakikada Olympique Lyon forması giyen Thiago Mendes ile girdiği mücadelede ayak bileğinden sakatlandı.", cateId: 1 },
            { name: "~NEYMARIN SAKATLIĞI GEÇTİ~", cateId: 1 },
            { name: "Ayak bileği kırılan neymar sağlığına ulaştı.", cateId: 1 },
            { name: "~NEYMARIN SAHALARA GERİ DÖNDÜ~", cateId: 1 },
            { name: "Neymar ilk maçına çıktı.", cateId: 1 },
            { name: "~DOLAR KURU DÜŞÜŞTE~" , cateId: 2 },
            { name: "Cuma günü gerilediği 20 Kasım'dan beri en düşük seviye olan 7.6095'ten yükselişe geçen dolar/TL dün 7.75'i test etse de kalıcı olmadı ve 7.70 altına geriledi." , cateId: 2 },
            { name: "~ALTIN YÜKSELİŞTE~" , cateId: 2 },
            { name: "Dünya'nın aktardığına göre, spot altın fiyatı bu sabah 1.880 dolar/ons seviyesini gördü, ardından 1.875.61 dolar/ons seviyesine kadar yükseldi." , cateId: 2 },
            { name: "~EURO YÜKSELİŞTE~" , cateId: 2 },
            { name: "Euro yükselmeye başladı." , cateId: 2 },
            { name: "~COVİD-19 MUTASYON GEÇİRDİ~" , cateId: 3 },
            { name: "Corona virüs mutasyona uğradı. Yeni virüs hakkında bilim insanları araştırmalarını sıklaştırdı. Uzmanlar corona mutasyon ile oluşan yeni virüsün çocuklar arasında daha kolay yayılıyor olması ihtimali üzerinde duruyor." , cateId: 3 },
            { name: "~AŞI NE KADAR GÜVENİLİR?~" , cateId: 3 },
            { name: "Londra Hijyen ve Tropik Tıp Okulu'ndan Prof. Stephen Evans Eğer güvenli derken kesinlikle hiçbir yan etkisi olmamasını kast ediyorsanız hiçbir aşı veya ilaç için güvenli diyemeyiz diyor" , cateId: 3 },
            { name: "~GRİBE DİKKAT~" , cateId: 3 },
            { name: "Sonbahardan kış mevsimine geçtiğimiz dönemle birlikte grip etkisini daha da artırıyor. Soğuk havaların devam etmesi, aşılamanın beklendiği kadar yaygın yapılamaması, kapalı alanlarda kişilerin birbirleri ile yakın teması, bu dönemde hasta sayısının artmasına yol açmakta." , cateId: 3 },
        ]

        if (this.state.selectedCategoryId < 1) {
            return <Text>Kategori seçilmediği için katagori seçilmediği için haberler listelenemedi</Text>
        }


        let renderProductList = [];

        productList.map((v, k) => {

            if (v.cateId === this.state.selectedCategoryId) {

                renderProductList.push(<Text style={{minHeight:50}}>{v.name}</Text>)

            }


        })


        return renderProductList

    }

    render() {

        return (
            <View>

                <Text>selected category : {this.state.selectedCategoryId}</Text>

                <FlatList
                    style={{ backgroundColor: 'red' }}
                    data={[{ name: "SPOR", id: 1 }, { name: "DÖVİZ KURLARI", id: 2 },{ name: "SAĞLIK", id: 3 }]}
                    renderItem={({ item }) => {

                        return (
                            <TouchableOpacity onPress={() => this.handlePress(item.id)} style={{ minHeight: 30, backgroundColor: 'blue' }}>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        )

                    }

                    }
                />

            <ScrollView style={{minHeight:400,backgroundColor:'skyblue'}}>
                {this.getProductListView()}
                </ScrollView>

            </View>
        )

    }


}