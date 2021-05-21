

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Left, Right, Body, Title } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
export default class FooterTabsExample extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }} >
        <Header transparent androidStatusBarColor="#fff" style={{ position: 'absolute', zIndex: 99, marginTop: 20 }} >
          <Left>
            <Icon style={{ margin: 5 }} name="left" size={20} color="#201E2A" />
          </Left>

          <Right>

            <Icon style={{ margin: 5 }} name="shoppingcart" size={20} color="#201E2A" />
          </Right>
        </Header>
        <View style={{ height: '50%', backgroundColor: '#F8C7C8', borderBottomRightRadius: 40, marginRight: 200, zIndex: -1, justifyContent: 'center', marginTop: 30 }} >
          <Image resizeMode="contain"
            style={{ height: 300, width: 380 }}
            // source={{ uri: 'https://cdn.shopify.com/s/files/1/0095/0625/9040/products/pros_menu_image_2000x_1024x1024_2x_c96b446b-5298-4eda-a9cd-bb53019bdf34.png?v=1594440273' }} />
            source={{ uri: 'https://cdn.shopify.com/s/files/1/0248/2454/5331/products/product_pic_4_2000x_8210dab3-6526-4b24-99fc-95271447ef7a_1024x1024@2x.png?v=1578781213' }} />
            {/* source={{ uri: 'https://i.resm.im/3UAPJ4t.png' }} /> */}
        </View>

        <View style={{ flex: 1, marginTop: 5,marginLeft:50 }} >




          <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#010304' }}>Airpods Pro</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#9A9C9D' }}>1299,00TL</Text>

          <View style={{ backgroundColor: '#E8E9EB', width: '60%', marginTop: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 10, padding: 10 }}>
            <View style={{flexDirection:'row',width:'85%'}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#010304' }}>Renk : </Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#010304' }}>Siyah</Text>

            </View>

            <View style={{ flexDirection: 'row',width:'90%' }}>
              <View style={{ backgroundColor: '#ccc', height: 25, width: 40, margin: 5, borderRadius: 10, borderColor: '#010304', borderWidth: 3,justifyContent:'center',alignItems:'center' }}>
                <View style={{ backgroundColor: '#010304', height: '80%', width: '90%', borderRadius: 5 }} />
              </View>

              <View style={{ backgroundColor: '#9C171C', height: 25, width: 40, margin: 5, borderRadius: 10, }}>

              </View>

              <View style={{ backgroundColor: '#fff', height: 25, width: 40, margin: 5, borderRadius: 10, }}>

              </View>
            </View>
          </View>
        </View>


        <View style={{ height: 100, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 24, marginBottom: 15 }}>Sepete Ekle</Text>
          <Image resizeMode="stretch"
            style={{ height: 100, width: '100%', position: 'absolute', zIndex: -1 }}
            source={require('./src/bannerBt.png')} />

        </View>
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

        {/* <View style={{
          width: 1400,
          height: 1400,
          borderRadius: 1400 / 2,
          backgroundColor: "#C9171F",
          top: 580,
          left: -505,
          position: 'absolute',
        }}>
        </View>
        <View style={{top:-60,
          alignContent:'flex-start',alignItems:'center',}}>

      <Text style={{fontSize:24,color:'#fff'}}>Sepete Ekle</Text>
        </View>

        <View style={{
          width: 1400,
          height: 1400,
          borderRadius: 1400 / 2,
          backgroundColor: "#141414",
          top: 670,
          left: -505,
          position: 'absolute',
          zIndex:1
        }}>
       
        </View>

       <View style={{width:'100%',zIndex:150}}>
       <Footer style={{backgroundColor:'transparent'}}>
          <FooterTab style={{backgroundColor:'transparent'}}>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text style={{color:'#fff'}}>Camera</Text>
            </Button>
            <Button>
              <Text>Navigate</Text>
            </Button>
            
          </FooterTab>
        </Footer>
       </View>
       */}



      </View>
    );
  }
}