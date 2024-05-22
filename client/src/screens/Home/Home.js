import React, { useEffect, useRef, useState } from 'react';
import { Pressable,View, ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, Image, FlatList, StatusBar } from "react-native";
import Styles from '../../styles/Tab/HometabStyle';
import { MedicineCategoryHomeTab, MegaMedicine, MedicineFalteList, DoctorListData } from '../../utils/Sliderimagedata';
import  Button  from '../../components/Button';
import { useSelector } from "react-redux";
import images from '../../index';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import IconF from 'react-native-vector-icons/dist/FontAwesome';
import IconY from 'react-native-vector-icons/dist/MaterialIcons';
import auth from '@react-native-firebase/auth'; // Import the auth module
import HeaderScreenAddress from '../../components/HeaderScreenAddress'
import image from '../../images';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import firestore from '@react-native-firebase/firestore';

const db = firestore();


const HomeTabset = (props) => {
  const insets = useSafeAreaInsets();
  const [productlist, setproducts] = useState([]);
  const [petslist, setpets] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [bestDeal, setBestDeal] = useState([]); // Set loading to true on component mount


  const getdatatest = async () => {
    const currentUser = auth().currentUser;
    if (currentUser) {
      const userDoc = await firestore().collection('User').doc(currentUser.uid).get();
      // console.log("user info", userDoc.data());
    }
  }

  const getdataPrducts = async () => {
    const subscriber = firestore()
    .collection('Product')
    .onSnapshot(querySnapshot => { 

      querySnapshot.forEach(documentSnapshot => {
        productlist.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setproducts(productlist);
      setLoading(false);
      productlist.length = 5;
      // console.log("zzzzzzzzzzzzzzzzzzzzzz",productlist.length);
    });

  }
  const getBestDeal = async () => {
    const subscriber = firestore()
    .collection('Product')
    .onSnapshot(querySnapshot => { 

      querySnapshot.forEach(documentSnapshot => {
        bestDeal.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setproducts(bestDeal.sort((a,b) => (a.Promos > b.Promos) ? 1 : ((b.Promos > a.Promos) ? -1 : 0)));
      setLoading(false);
      bestDeal.length = 5;
      // console.log("zzzzzzzzzzzzzzzzzzzzzz",bestDeal);
    });



    const array=productlist.sort((a,b) => (a.Promos > b.Promos) ? 1 : ((b.Promos > a.Promos) ? -1 : 0))
    
    setBestDeal(array)
   


    
  }

  const getdataPets = async () => {
    const subscriber = firestore()
    .collection('Animal')
    .onSnapshot(querySnapshot => { 

      querySnapshot.forEach(documentSnapshot => {
        petslist.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setproducts(petslist);
      setLoading(false);
      // petslist.length = 5;
      // console.log("zzzzzzzzzzzzzzzzzzzzzz",petslist);
    });

  }

  const { navigation } = props;
 
   const pricesymboldata  = '$'
  const [liked, setLiked] = useState([]);
  const [timer, setTimer] = useState(24339); // 25 minutes
  const [start, setStart] = useState(true);
  const tick = useRef();
  const [user, setUser] = useState(null); // State to hold the user object 
  const [EmailSendAlert, setEmailSendAlert] = useState(0);


  useEffect(() => {
    // Get the current user when the component mounts
    getdatatest()
    getdataPrducts()
    getdataPets()
    getBestDeal()
    
    
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
      // console.log('subscriber',user);
      const r = db.collection('users').doc(user.uid).onSnapshot((doc) => {
        // console.log('User:', doc.data());
        setUser(doc.data());
      });
    });
    return subscriber;
  }, []);
  const dispSecondsAsMins = (value) => {
    const sec = parseInt(value, 10);
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60);
    let seconds = sec - (hours * 3600) - (minutes * 60);
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return hours + ':' + minutes + ':' + seconds;
  };

  const HandleAddToCart =  async (item) => {
    let Product = {
      id: item.id,
      image: item.imageUrl,
      price: item.price.trim(), // Remove leading and trailing spaces
      count: 1,
      name: item.text
    }
    // console.log('Product',Product); // Log the Product object to check its properties

    await db.collection(`Cart/${user.uid}/item`).add(
        Product
    )
    setEmailSendAlert(1)
  }
  const TodayDeals = [
    {
      "id": 1,
      "imageUrl": images.Home_DealsOfTheDay_img1,
      "ratingset": images.one_hundred_thirty,
      "text": 'Barks & Wags Plaid Pet House',
      "hospitalname": '(S, Pink Plaid)',
      "function": dispSecondsAsMins(timer),
      "rating": <Rating
        type='custom'
        ratingColor='#FFC000'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={5}
        tintColor={'white'}
        imageSize={18}
        startingValue={5}
        isDisabled={false}
        style={{ paddingVertical: 10 }}
      />,
      "price": ' ' + '15',
      "pricetwo": ' ' + '20',
      "dealendtext": 'Deal Ends :',
      "time": '02:53:18',
      "buttonaadtext": 'ADD',
      "offdecount": 'Up to 30% Off',
    },
    {
      "id": 2,
      "imageUrl": images.Home_DealsOfTheDay_img2,
      "ratingset": images.one_hundred_thirty,
      "text": 'Combo Dog Harness for Easy Walk',
      "hospitalname": 'Small, Big',
      "function": dispSecondsAsMins(timer),
      "rating": <Rating
        type='custom'
        ratingColor='#FFC000'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={5}
        tintColor={'white'}
        imageSize={18}
        startingValue={5}
        isDisabled={false}
        style={{ paddingVertical: 10 }}
      />,
      "price": ' ' + '11',
      "pricetwo": ' ' + '10',
      "dealendtext": 'Deal Ends :',
      "time": '02:53:18',
      "buttonaadtext": 'ADD',
      "offdecount": 'Up to 25% Off',
      "outofstock": 'Out Of Stock'
    },
    {
      "id": 3,
      "imageUrl": images.Home_DealsOfTheDay_img3,
      "ratingset": images.one_hundred_thirty,
      "text": 'Meat Up Meat and Rice',
      "hospitalname": '10kg',
      "function": dispSecondsAsMins(timer),
      "rating": <Rating
        type='custom'
        ratingColor='#FFC000'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={5}
        tintColor={'white'}
        imageSize={18}
        startingValue={5}
        isDisabled={false}
        style={{ paddingVertical: 10 }}
      />,
      "price": ' ' + '2',
      "pricetwo": ' ' + '3',
      "dealendtext": 'Deal Ends :',
      "time": '02:53:18',
      "buttonaadtext": 'ADD',
      "offdecount": 'Up to 45% Off',
    },
    {
      "id": 4,
      "imageUrl": images.Home_DealsOfTheDay_img4,
      "ratingset": images.one_hundred_thirty,
      "text": 'Classic Pet Chunk Dog Food - Adult',
      "hospitalname": 'Medium, 1.2 Kg',
      "function": dispSecondsAsMins(timer),
      "rating": <Rating
        type='custom'
        ratingColor='#FFC000'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={5}
        tintColor={'white'}
        imageSize={18}
        startingValue={5}
        isDisabled={false}
        style={{ paddingVertical: 10 }}
      />,
      "price": ' ' + '10',
      "pricetwo": ' ' + '15',
      "dealendtext": 'Deal Ends :',
      "time": '02:53:18',
      "buttonaadtext": 'ADD',
      "offdecount": 'Up to 20% Off',
      "outofstock": 'Out Of Stock'
    },
    {
      "id": 5,
      "imageUrl": images.Home_DealsOfTheDay_img5,
      "ratingset": images.one_hundred_thirty,
      "text": 'Woof Natural Chicken and Milk',
      "hospitalname": ' 2.2 kg',
      "function": dispSecondsAsMins(timer),
      "rating": <Rating
        type='custom'
        ratingColor='#FFC000'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={5}
        tintColor={'white'}
        imageSize={18}
        startingValue={5}
        isDisabled={false}
        style={{ paddingVertical: 10 }}
      />,
      "price": ' ' + '13',
      "pricetwo": ' ' + '17',
      "dealendtext": 'Deal Ends :',
      "time": '02:53:18',
      "buttonaadtext": 'ADD',
      "offdecount": 'Up to 60% Off',
    },
  ]
  const handleLike = async (productId) => {
    try {
      const user = auth().currentUser;
      if (user) {
        const userRef = firestore().collection('users').doc(user.uid);
        const doc = await userRef.get();
        if (doc.exists) {
          const userData = doc.data();
          if (userData.favorite === undefined) {
            // If 'favorite' field is not defined, initialize it as an empty array
            await userRef.update({ favorite: [] });
          }
          // Update the 'favorite' field in user's document
          const updatedFavorites = [...userData.favorite, productId];
          await userRef.update({ favorite: updatedFavorites });
        } else {
          console.log('No such document!');
        }
      }
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }
  const MedicineDeals = (item, index) => {
    return (
      <View style={[Styles.setbgcolorviewtimewrap, Styles.bgcolorset]}>
        <View style={Styles.setbgcolorviewtime}>
          
            <View>
              <TouchableOpacity style={Styles.flexrowsecenterimage}
                onPress={() =>  navigation.navigate('productDetails',{item:item})}>
                <Image style={Styles.whiteboximage} resizeMode="contain" source={{uri:item.ImgUrl}} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>  navigation.navigate('productDetails',{item:item})}>
                <Text  numberOfLines={2} style={[Styles.setnormatextstyle, { color: "#861088" ,height:35}]}>{item.Name}</Text>
              </TouchableOpacity>
              <Text style={[Styles.settextcolorcenterthree, Styles.settextcolorcenterthreetow]}>{item.hospitalname}</Text>
              <View style={Styles.flexrowjuctycenter}>
                {item.rating}
              </View>
              <View style={Styles.flexrowsettext}>
                <Text style={[Styles.settextprice, { color: "black" }]}>{pricesymboldata}{item.Price}</Text>
              </View>
              <View style={Styles.flexrocenterjusty}>
                <View style={Styles.addbutttonwidth}>
                  <Button onPress={() => HandleAddToCart(item)} buttonTextStyle={{ color: 'white' }} buttonStyle={{ height: 35, backgroundColor: "#861088" }} title={'ADD'} />
                </View>
              </View>
              {/* <View style={[Styles.settextinbgcolor, { backgroundColor: "#861088" }]}>
                <Text style={Styles.setdescounrtextstyle}>{item.offdecount}</Text>
              </View> */}
            </View>
          
        </View>
      </View>
    );
  }
  const doctordatatendingmenu = (docterdata) => {
    dispatch(get_doctore_detailes_action(docterdata))
    navigation.navigate('')
  }
  const MegaMedicineStore = (item, index) => {
    return (
      <View>
        <View style={Styles.minbgviewset}>
          <TouchableOpacity style={Styles.imagecengter} onPress={() => navigation.navigate('productDetails',{item:item})}>
            <Image style={[Styles.whiteboximagetwoset, Styles.whiteboximagetwosettwo]} resizeMode='contain' source={{uri:item.ImgUrl}} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('productDetails', {item:item})}>
            <Text numberOfLines={1} style={[Styles.settextcolorcenter, { color: "#861088" }]}>{item.Name}</Text>
          </TouchableOpacity>
          <Text style={Styles.settextcolorcentertwo}>{item.AdresseShop}</Text>
          <View style={Styles.flexrowseticon}>
            <View>
              {item.ratings}
            </View>
          </View>
          <View style={Styles.flexrowseticonNewArrival}>
            <View>
              <Text style={[Styles.settextpricebold, { color: "#861088" }]}>{pricesymboldata} {item.Price}</Text>
            </View>
            <TouchableOpacity onPress={() => doctordatatendingmenu(item)} style={[Styles.seticonbgcolorview, { backgroundColor: "#861088" }]}>
              <IconF name={'plus'} size={20} color={'white'} />
            </TouchableOpacity>
          </View>
          <View style={[Styles.settextinbgcolor, { backgroundColor: "#861088" }]}>
            <Text style={Styles.setdescounrtextstyle}>Up to {item.Promos}% Off </Text>
          </View>



          {/* <TouchableOpacity
            onPress={() => {
              if (liked.includes(index)) {
                let unlike = liked.filter((elem) => elem !== index);
                setLiked(unlike);
              } else {
                setLiked([...liked, index]);
                handleLike(item.id); // Call handleLike function when a user likes a product
              }
            }} style={Styles.HeartIconLike}>

            <Icon
              name="heart"
              size={25}
              style={{ color: liked.includes(index) ? 'red' : 'lightgrey' }}
            />
          </TouchableOpacity> */}

        </View>
      </View>
    );
  }
  const doctordataset = (docterdata) => {
    dispatch(get_doctore_detailes_action(docterdata))
    navigation.navigate('')
  }
  const MedicineBox = (item) => {
    return (
      <View style={Styles.populaitemnearby}>
        <View style={Styles.flexrowtextandimage}>
          <TouchableOpacity onPress={() =>  navigation.navigate('PetsDetailesScreen',{item:item})}>
            <Image style={Styles.whiteboximagetwoset} resizeMode="cover" source={{uri:item.ImgUrl}}/>
          </TouchableOpacity>
          <View style={Styles.setwidthalltext}>
            <TouchableOpacity onPress={() => navigation.navigate('PetsDetailesScreen',{item:item})}>
              <Text style={[Styles.settextpricebold, { color: "#861088" }]} >{item.Name}</Text>
            </TouchableOpacity>
            <Text numberOfLines={2} style={[Styles.settextcolorcentertwo]}>{item.Description}</Text>
            <View style={Styles.flexstarticon}>
              {item.ratings}
              <Text style={Styles.ratingtextnumber}>(4.3)</Text>
            </View>
            <View style={Styles.flexrowsetrating}>
              <View style={Styles.dicscounttextflex}>
                <Text style={[Styles.settextpricebold, { color: "#861088" }]}> {item.Adresse}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity  style={[Styles.setplusicon,{marginRight:10}]} onPress={() => navigation.navigate('productDetails')}>
            <IconY  name='pets' size={27} color={"#861088"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  let temp = MedicineFalteList
  temp.length = 2;
  // console.log(temp);
  const doctordatacategoryes = (doctordatacategoryes) => {
    dispatch(get_doctore_category_action(doctordatacategoryes))
    navigation.navigate('')
  }
  const CategoryListBox = (item) => {
    return (
      <TouchableOpacity onPress={() => doctordatacategoryes(item)}>
        <View style={Styles.flexcenterviewTWO}>
          <View style={Styles.widtsetnew}>
            <View>
              <View style={Styles.imagecenterstyle}>
                {item.image}
              </View>
              <View>
                <Text style={Styles.textsetfood}>{item.text}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  const DoctorList = (item) => {
    return (
      <View style={Styles.Doctorbox}>       
          <View style={Styles.doctorimagbox}>
            <TouchableOpacity onPress={() => navigation.navigate('AppointContact',{DoctorListData:DoctorListData,doctor:item})}>
              <Image style={Styles.Doctorimage} resizeMode="contain" source={item.doctorImg} />
            </TouchableOpacity>
            <Text style={[Styles.Doctornametext, { color: "#861088" }]} >{item.doctorname}</Text>
            <Text style={Styles.doctorSpec}>{item.spec}</Text>
            <View style={Styles.flexstarticon}>
              {item.ratings}
              <Text style={Styles.ratingtextnumber}>{item.rating}</Text>
            </View>
          </View>       
      </View>
    );
  }

  return (
<View style={{ flex: 1, paddingBottom: insets.bottom + 50}}>
      <HeaderScreenAddress user={user} navigation={navigation}/>
    <View style={[Styles.minstyleviewphotograpgy, Styles.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
          
        <View style={Styles.minflexview}>
          <View style={Styles.minviewsigninscreen}>
            <View style={{ paddingTop: -30 }}>
              {/* <HomeFirstImageSlider /> */}
            </View>
            <View style={Styles.marginsetminview}>
              <View style={Styles.FlexRowBetwn}>
                
                <Text style={Styles.settopcategories}>Trending Categories</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                  <Text style={[Styles.SeeAlltext, { color: "#861088" }]}>See All</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={MedicineCategoryHomeTab}
                renderItem={({ item, index }) => CategoryListBox(item, index)}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={Styles.setflex}
                contentContainerStyle={{ paddingHorizontal: 20, paddingLeft: 15 }}
              />
              <View>
                <View style={Styles.topspacesetminview}>
                  <Text style={Styles.settopcategories}>New Arrivals</Text>
                  <FlatList
                    data={productlist}
                    renderItem={({ item, index }) => MedicineDeals(item, index)}
                    // keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={Styles.setflex}
                    contentContainerStyle={{ paddingHorizontal: 20, paddingRight: 10 }}
                  />
                </View>
                <View style={[Styles.topspacesetminview, Styles.topspacesetminviewTop]}>
                <View style={Styles.FlexRowBetwn}>
                <Text style={Styles.settopcategories}>Pets To Adopt</Text>
                <TouchableOpacity onPress={() => navigation.navigate('AdoptList')}>
                  <Text style={[Styles.SeeAlltext, { color: "#861088" }]}>See All</Text>
                </TouchableOpacity>
              </View>
                  
                  <FlatList
                    data={petslist}
                    renderItem={({ item, index }) => MedicineBox(item, index)}
                    // keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={Styles.setflex}
                    contentContainerStyle={{ paddingHorizontal: 20, paddingRight: 10 }}
                  />
                </View>
                <View style={Styles.topspacesetminview}>
                  <Text style={Styles.settopcategoriestwo}> Deals of the day</Text>
                  <FlatList
                    data={bestDeal}
                    renderItem={({ item, index }) => MegaMedicineStore(item, index)}
                    // keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={Styles.setflex}
                    contentContainerStyle={{ paddingHorizontal: 20, paddingRight: 10 }}
                  />
                </View>
                {/* Doctor Profiles */}
                <View style={Styles.topspacesetminview}>
                  <Text style={Styles.settopcategoriestwo}>Consultant</Text>  
                  <View style={{ alignItems: 'flex-end', position:'absolute', left:320, top:16 }}> 
                  <TouchableOpacity onPress={() => navigation.navigate('DoctorList')}>
                  <Text style={[ { textAlign:'left',color: "#861088", fontSize:20}]}>See All</Text>
                </TouchableOpacity>      
                </View>        
                  <FlatList
                    data={DoctorListData}
                    renderItem={({ item, index }) => DoctorList(item, index)}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={Styles.setflex}
                    contentContainerStyle={{ paddingHorizontal: 18, paddingRight: 18 }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

 
    
    </View>
    </View>
  );
};
export default HomeTabset;