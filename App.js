

import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Left, Right, Body, Title } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
export default class FooterTabsExample extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#EEF2F6' }} >
        <Header transparent androidStatusBarColor="#EEF2F6" style={{ marginTop: 20 }} >


          <Title style={{ fontSize: 36, fontWeight: 'bold', color: '#010304' }}>Anasayfa</Title>


          <Right>

            <Icon style={{ margin: 5 }} name="shoppingcart" size={20} color="#201E2A" />
          </Right>
        </Header>


        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ height: 120 }}>


          <View style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            height: 150, width: 250, margin: 20, marginLeft: 35, borderRadius: 20, shadowColor: "#241F20",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
            <View style={{ width: '50%' }}>
              <Image resizeMode="contain"
                style={{
                  height: '100%', width: '100%', marginLeft: -30, transform: [
                    { rotateZ: "-10deg" },
                  ]
                }}
                source={{ uri: 'https://cdn.shopify.com/s/files/1/0248/2454/5331/products/product_pic_4_2000x_8210dab3-6526-4b24-99fc-95271447ef7a_1024x1024@2x.png?v=1578781213' }} />
            </View>
            <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#010304' }}>Yeni Gelenler</Text>
              <View style={{ backgroundColor: '#C61A1B', justifyContent: 'center', alignItems: 'center', width: '80%', height: 40, margin: 10, borderRadius: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Satın Al</Text>
              </View>
            </View>
          </View>

          <View style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            height: 150, width: 250, margin: 20, borderRadius: 20, shadowColor: "#241F20",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
            <View style={{ width: '50%' }}>
              <Image resizeMode="contain"
                style={{
                  height: '100%', width: '100%', marginLeft: -30, transform: [
                    { rotateZ: "-10deg" },
                  ]
                }}
                source={{ uri: 'https://dealz.co.za/wp-content/uploads/2020/09/CGW40.png' }} />
            </View>
            <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#010304' }}>Yeni Gelenler</Text>
              <View style={{ backgroundColor: '#C61A1B', justifyContent: 'center', alignItems: 'center', width: '80%', height: 40, margin: 10, borderRadius: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Satın Al</Text>
              </View>
            </View>
          </View>


        </ScrollView>


        <Header transparent style={{marginTop:-50}} >


          <Title style={{ fontSize: 36, fontWeight: 'bold', color: '#010304' }}>Öneriler</Title>


          <Right>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#C61A1B' }}>Tümü</Text>
              <Icon style={{ margin: 5 }} name="right" size={20} color="#C61A1B" />
            </View>
          </Right>
        </Header>

        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ height: 160 }}>


          <View style={{
            backgroundColor: '#fff',
            height: 250, width: 130, margin: 20, marginLeft: 35, borderRadius: 20,
            shadowColor: "#241F20",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
            <View style={{ width: '100%',height:'70%',justifyContent:'center',alignItems:'center', }}>
              <Image resizeMode="contain"
                style={{
                  height: '100%', width: '100%', marginTop: -50, transform: [
                    { rotateZ: "0deg" },
                  ]
                }}
                source={{ uri: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021658000' }} />
            </View>
            <View style={{ width: '100%',height:'20%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#010304' }}>iPhone 12</Text>
              <View style={{ backgroundColor: '#1295D3', justifyContent: 'center', alignItems: 'center', width: '80%', height: 40, margin: 10, borderRadius: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Satın Al</Text>
              </View>
            </View>
          </View>

       
          <View style={{
            backgroundColor: '#fff',
            height: 250, width: 130, margin: 20,marginLeft:10, borderRadius: 20,
            shadowColor: "#241F20",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
            <View style={{ width: '100%',height:'70%',justifyContent:'center',alignItems:'center', }}>
              <Image resizeMode="contain"
                style={{
                  height: '100%', width: '100%', marginTop: -50, transform: [
                    { rotateZ: "10deg" },
                  ]
                }}
                source={{ uri: 'https://res-4.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1280,q_auto,w_1280/v1605180414/ow2nx0wdmgolv8arms2h.png' }} />
            </View>
            <View style={{ width: '100%',height:'20%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#010304' }}>Macbooks</Text>
              <View style={{ backgroundColor: '#1295D3', justifyContent: 'center', alignItems: 'center', width: '80%', height: 40, margin: 10, borderRadius: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Satın Al</Text>
              </View>
            </View>
          </View>


          <View style={{
            backgroundColor: '#fff',
            height: 250, width: 130, margin: 20,marginLeft:10, borderRadius: 20,
            shadowColor: "#241F20",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
            <View style={{ width: '100%',height:'70%',justifyContent:'center',alignItems:'center', }}>
              <Image resizeMode="contain"
                style={{
                  height: '100%', width: '100%', marginTop: -50, transform: [
                    { rotateZ: "10deg" },
                  ]
                }}
                source={{ uri: 'https://www.beko.com.tr/content/dam/beko-tr/bekoTurkeyProductCatalog/product-images/7961651600-iPhone-11-256GB-Sari/7961651600-LO2-20190924-093531.png' }} />
            </View>
            <View style={{ width: '100%',height:'20%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#010304' }}>Macbooks</Text>
              <View style={{ backgroundColor: '#1295D3', justifyContent: 'center', alignItems: 'center', width: '80%', height: 40, margin: 10, borderRadius: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Satın Al</Text>
              </View>
            </View>
          </View>


        </ScrollView>





      

        <View style={{ height: 80, width: '100%', marginTop: -25, marginBottom: -60 }}>
          <Image resizeMode="stretch"
            style={{ height: 80, width: '100%' }}
            source={require('./src/bannerBtSiyah.png')} />
        </View>

        <Footer style={{ backgroundColor: '#000' }}>
          <FooterTab style={{ backgroundColor: 'transparent' }}>
            <Button>
              <Icon style={{ margin: 5 }} name="home" size={20} color="#fff" />
            </Button>
            <Button>
              <Icon style={{ margin: 5 }} name="search1" size={20} color="#fff" />
            </Button>
            <Button>
              <Icon style={{ margin: 5 }} name="user" size={20} color="#fff" />
            </Button>

          </FooterTab>
        </Footer>



      </View>
    );
  }
}