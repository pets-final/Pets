import React, { useEffect, useRef, useState } from 'react';
import { View, ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, Image, FlatList, StatusBar } from "react-native";
import Styles from '../../styles/Tab/HometabStyle';
// import { RouteName } from '../../../routes';
import { MedicineCategoryHomeTab, MegaMedicine, MedicineFalteList, DoctorListData } from '../../utils/Sliderimagedata';
// import { useDispatch } from "react-redux";
import  Button  from '../../components/Button';
// import { get_doctore_category_action } from '../../../redux/action/DoctoreCategoryAction';
import { useSelector } from "react-redux";
import images from '../../../index';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import IconF from 'react-native-vector-icons/dist/FontAwesome';
// import { get_doctore_detailes_action } from '../../../redux/action/DoctoreDataAction';
// import { price_symbol_action } from '../../../redux/action/CommonAction';
// import { HomeFirstImageSlider, SearchHeaderScreen } from '../../../screens';

const HomeTabset = (props) => {
  const { navigation } = props;
  // const dispatch = useDispatch();
  // const { doctoreDetaile } = useSelector(state => state.doctorDataReducer) || { doctoreDetaile };
   const pricesymboldata  = '$'
  const [liked, setLiked] = useState([]);
  const [timer, setTimer] = useState(24339); // 25 minutes
  const [start, setStart] = useState(true);
  const tick = useRef();

  let PriceSymbol = '$';

  // useEffect(() => {
  //   dispatch(price_symbol_action(PriceSymbol))
  //   if (start) {
  //     tick.current = setInterval(() => {
  //       setTimer((timer) => timer - 1);
  //     }, 1000);
  //   }
  //   return () => clearInterval(tick.current);
  // }, [start]);

  // const toggleStart = () => {
  //   setStart(!start);
  // };
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


  const TodayDeals = [
    {
      "id": 1,
      "image": images.Home_DealsOfTheDay_img1,
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
      price: ' ' + '15',
      "pricetwo": ' ' + '20',
      "dealendtext": 'Deal Ends :',
      "time": '02:53:18',
      "buttonaadtext": 'ADD',
      "offdecount": 'Up to 30% Off',
    },
    {
      "id": 2,
      "image": images.Home_DealsOfTheDay_img2,
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
      "image": images.Home_DealsOfTheDay_img3,
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
      "image": images.Home_DealsOfTheDay_img4,
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
      "image": images.Home_DealsOfTheDay_img5,
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
  const doctordata = (docterdata) => {
    dispatch(get_doctore_detailes_action(docterdata))
    navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN)
  }
  const MedicineDeals = (item, index) => {
    return (
      <View style={[Styles.setbgcolorviewtimewrap, Styles.bgcolorset]}>
        <View style={Styles.setbgcolorviewtime}>
          {index === 1 || index === 3 ?
            <View>
              <View style={{ opacity: 0.4 }}>
                <TouchableOpacity style={Styles.flexrowsecenterimage}
                  onPress={() => doctordata(item)}>
                  <Image style={Styles.whiteboximage} resizeMode="contain" source={item.image} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => doctordata(item)}>
                <Text style={[Styles.setnormatextstyle, { color: "#feb344" }]}>{item.text}</Text>
              </TouchableOpacity>
              <Text style={[Styles.settextcolorcenterthree, Styles.settextcolorcenterthreetow]}>{item.hospitalname}</Text>
              <View style={Styles.flexrowjuctycenter}>
                {item.rating}
              </View>
              <View style={Styles.flexrowsettext}>
                <Text style={[Styles.settextprice, { color: "#feb344" }]}>{pricesymboldata}{item.price}</Text>
                <Text style={Styles.settextpricetwo}>{item.pricetwo}</Text>
              </View>
              <View style={Styles.flexrocenterjusty}>
                <View style={Styles.addbutttonwidth}>
                  <Button onPress={() => navigation.navigate(RouteName.CART_SCREEN)} buttonTextStyle={{ color: 'white' }} buttonStyle={{ height: 35, backgroundColor: "#feb344" }} title={item.buttonaadtext} />
                </View>
              </View>
              <View style={[Styles.settextinbgcolor, { opacity: 0.6 }, { backgroundColor: "#feb344" }]}>
                <Text style={Styles.setdescounrtextstyle}>{item.offdecount}</Text>
              </View>
              <Text style={Styles.outoftextset}>{item.outofstock}</Text>
            </View>
            :
            <View>
              <TouchableOpacity style={Styles.flexrowsecenterimage}
                onPress={() => doctordata(item)}>
                <Image style={Styles.whiteboximage} resizeMode="contain" source={item.image} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => doctordata(item)}>
                <Text style={[Styles.setnormatextstyle, { color: "#feb344" }]}>{item.text}</Text>
              </TouchableOpacity>
              <Text style={[Styles.settextcolorcenterthree, Styles.settextcolorcenterthreetow]}>{item.hospitalname}</Text>
              <View style={Styles.flexrowjuctycenter}>
                {item.rating}
              </View>
              <View style={Styles.flexrowsettext}>
                <Text style={[Styles.settextprice, { color: "#feb344" }]}>{pricesymboldata}{item.price}</Text>
                <Text style={Styles.settextpricetwo}>{item.pricetwo}</Text>
              </View>
              <View style={Styles.flexrocenterjusty}>
                <View style={Styles.addbutttonwidth}>
                  <Button onPress={() => navigation.navigate(RouteName.CART_SCREEN)} buttonTextStyle={{ color: 'white' }} buttonStyle={{ height: 35, backgroundColor: "#feb344" }} title={item.buttonaadtext} />
                </View>
              </View>
              <View style={[Styles.settextinbgcolor, { backgroundColor: "#feb344" }]}>
                <Text style={Styles.setdescounrtextstyle}>{item.offdecount}</Text>
              </View>
            </View>
          }
        </View>
      </View>
    );
  }
  const doctordatatendingmenu = (docterdata) => {
    dispatch(get_doctore_detailes_action(docterdata))
    navigation.navigate(RouteName.CART_SCREEN)
  }
  const MegaMedicineStore = (item, index) => {
    return (
      <View>
        <View style={Styles.minbgviewset}>
          <TouchableOpacity style={Styles.imagecengter} onPress={() => doctordata(item)}>
            <Image style={[Styles.whiteboximagetwoset, Styles.whiteboximagetwosettwo]} resizeMode='contain' source={item.image} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { title: item.text, img: item.image, hname: item.hospitalname })}>
            <Text style={[Styles.settextcolorcenter, { color: "#feb344" }]}>{item.text}</Text>
          </TouchableOpacity>
          <Text style={Styles.settextcolorcentertwo}>{item.hospitalname}</Text>
          <View style={Styles.flexrowseticon}>
            <View>
              {item.ratings}
            </View>
          </View>
          <View style={Styles.flexrowseticonNewArrival}>
            <View>
              <Text style={[Styles.settextpricebold, { color: "#feb344" }]}>{pricesymboldata} {item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => doctordatatendingmenu(item)} style={[Styles.seticonbgcolorview, { backgroundColor: "#feb344" }]}>
              <IconF name={item.plusicon} size={20} color={'white'} />
            </TouchableOpacity>
          </View>
          <View style={[Styles.settextinbgcolor, { backgroundColor: "#feb344" }]}>
            <Text style={Styles.setdescounrtextstyle}>{item.discount}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              if (liked.includes(index)) {
                let unlike = liked.filter((elem) => elem !== index);
                setLiked(unlike);
              } else {
                setLiked([...liked, index]);
              }
            }} style={Styles.HeartIconLike}>

            <Icon
              name="heart"
              size={25}
              style={{ color: liked.includes(index) ? 'red' : 'lightgrey' }}
            />
          </TouchableOpacity>

        </View>
      </View>
    );
  }
  const doctordataset = (docterdata) => {
    dispatch(get_doctore_detailes_action(docterdata))
    navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN)
  }
  const MedicineBox = (item) => {
    return (
      <View style={Styles.populaitemnearby}>
        <View style={Styles.flexrowtextandimage}>
          <TouchableOpacity onPress={() => doctordata(item)}>
            <Image style={Styles.whiteboximagetwoset} resizeMode="cover" source={item.image} />
          </TouchableOpacity>
          <View style={Styles.setwidthalltext}>
            <TouchableOpacity onPress={() => doctordata(item)}>
              <Text style={[Styles.settextpricebold, { color: "#feb344" }]} >{item.text}</Text>
            </TouchableOpacity>
            <Text style={[Styles.settextcolorcentertwo]}>{item.hospitalname}</Text>
            <View style={Styles.flexstarticon}>
              {item.ratings}
              <Text style={Styles.ratingtextnumber}>(4.3)</Text>
            </View>
            <View style={Styles.flexrowsetrating}>
              <View style={Styles.dicscounttextflex}>
                <Text style={[Styles.settextpricebold, { color: "#feb344" }]}>{pricesymboldata} {item.price}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={Styles.setplusicon} onPress={() => doctordata(item)}>
            <IconF name={item.plusicon} size={30} color={"#feb344"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  const doctordatacategoryes = (doctordatacategoryes) => {
    dispatch(get_doctore_category_action(doctordatacategoryes))
    navigation.navigate(RouteName.PRODUCT_TAB)
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
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.CHAT_WITH_DOCTOR_SCREEN)}>
              <Image style={Styles.Doctorimage} resizeMode="contain" source={item.doctorImg} />
            </TouchableOpacity>
            <Text style={[Styles.Doctornametext, { color: "#feb344" }]} >{item.doctorname}</Text>
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
                  <Text style={[Styles.SeeAlltext, { color: "#feb344" }]}>See All</Text>
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
                  <Text style={Styles.settopcategories}>Deals of the day</Text>
                  <FlatList
                    data={TodayDeals}
                    renderItem={({ item, index }) => MedicineDeals(item, index)}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={Styles.setflex}
                    contentContainerStyle={{ paddingHorizontal: 20, paddingRight: 10 }}
                  />
                </View>
                <View style={[Styles.topspacesetminview, Styles.topspacesetminviewTop]}>
                  <Text style={Styles.settopcategories}>Top Selling</Text>
                  <FlatList
                    data={MedicineFalteList}
                    renderItem={({ item, index }) => MedicineBox(item, index)}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={Styles.setflex}
                    contentContainerStyle={{ paddingHorizontal: 20, paddingRight: 10 }}
                  />
                </View>
                <View style={Styles.topspacesetminview}>
                  <Text style={Styles.settopcategoriestwo}>New Arrivals</Text>
                  <FlatList
                    data={MegaMedicine}
                    renderItem={({ item, index }) => MegaMedicineStore(item, index)}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={Styles.setflex}
                    contentContainerStyle={{ paddingHorizontal: 20, paddingRight: 10 }}
                  />
                </View>
                {/* Doctor Profiles */}
                <View style={Styles.topspacesetminview}>
                  <Text style={Styles.settopcategoriestwo}>Consultant</Text>                 
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
  );
};
export default HomeTabset;
