import React, { useEffect } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconS from 'react-native-vector-icons/Entypo';
import Style from '../styles/CommonStyle/Style';
import images from '../index';
import IconR from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/MaterialIcons';
import { Rating } from 'react-native-ratings';

export const carouselItems = [
    {
        title: 'Senitizer',
        paregraphtitle: 'For multiple users.',
        imge: <Image style={Style.imagsetstyle} resizeMode="contain" source={images.hand_sanitizer_img} />,
        bottomtext: 'Under $12.05',
        imagbottomtext: 'BUY NOW',
        seticon: <Icon name="angle-right" size={13} />,
    },
    {
        title: 'Rice',
        paregraphtitle: 'For multiple users.',
        imge: <Image style={Style.imagsetstyle} resizeMode="contain" source={images.rice_img} />,
        bottomtext: '1 Kg Pack Only Under $36.20',
        imagbottomtext: 'BUY NOW',
        seticon: <Icon name="angle-right" size={13} />,
    },
    {
        title: 'Body Lotion',
        paregraphtitle: 'For multiple users.',
        imge: <Image style={Style.imagsetstyle} resizeMode='contain' source={images.lotion_img} />,
        bottomtext: 'Start from $28.56',
        imagbottomtext: 'BUY NOW',
        seticon: <Icon name="angle-right" size={13} />,
    },
    {
        title: 'Red & Fresh Tomatos',
        paregraphtitle: 'For multiple users.',
        imge: <Image style={Style.imagsetstyle} resizeMode='contain' source={images.red_tomatoes_img} />,
        bottomtext: 'Fresh tomatos Under %36.56',
        imagbottomtext: 'BUY NOW',
        seticon: <Icon name="angle-right" size={13} />,
    },
    {
        title: 'Olive Oil',
        paregraphtitle: 'For multiple users.',
        imge: <Image style={Style.imagsetstyle} resizeMode="contain" source={images.olive_img} />,
        bottomtext: '2 Pack only $99.99',
        imagbottomtext: 'BUY NOW',
        seticon: <Icon name="angle-right" size={13} />,
    },
    {
        title: 'Amul Milk',
        paregraphtitle: 'For multiple users.',
        imge: <Image style={Style.imagsetstyle} resizeMode='contain' source={images.milk_almond_img} />,
        bottomtext: '5 Pack set only Under $60.00',
        imagbottomtext: 'BUY NOW',
        seticon: <Icon name="angle-right" size={13} />,
    },
    {
        title: 'Baby Toys',
        paregraphtitle: 'For multiple users.',
        imge: <Image style={Style.imagsetstyle} resizeMode="contain" source={images.toys_img} />,
        bottomtext: 'Different toys starting from $50.99',
        imagbottomtext: 'BUY NOW',
        seticon: <Icon name="angle-right" size={13} />,
    },
    {
        title: 'Almond dry fruit',
        paregraphtitle: 'For multiple users.',
        imge: <Image style={Style.imagsetstyle} resizeMode='contain' source={images.almond_bowl_img} />,
        bottomtext: '250 gm only $100.00',
        imagbottomtext: 'BUY NOW',
        seticon: <Icon name="angle-right" size={13} />,
    },
];
export const MedicineCategoryHomeTab = [
    {
        "id": 1,
        "image": <Image style={Style.imagsetstylefoodyitemdata2} resizeMode="contain" source={images.HomePageCateImg1} />,
        "text": 'Food',
    },
    {
        "id": 2,
        "image": <Image style={Style.imagsetstylefoodyitemdata2} resizeMode="contain" source={images.HomePageCateImg2} />,
        "text": 'Treat',
    },
    {
        "id": 3,
        "image": <Image style={Style.imagsetstylefoodyitemdata2} resizeMode="contain" source={images.HomePageCateImg6} />,
        "text": 'Walking Essential',

    },
   
    {
        "id": 4,
        "image": <Image style={Style.imagsetstylefoodyitemdata2} resizeMode="contain" source={images.HomePageCateImg5} />,
        "text": 'Health',
    },
    {
        "id": 5,
        "image": <Image style={Style.imagsetstylefoodyitemdata2} resizeMode="contain" source={images.HomePageCateImg4} />,
        "text": 'Hygiene',
    },

 
]
export const MegaMedicine = [
    {
        "id": 1,
        "image": images.HomeNewArrivalsImg1,
        "text": 'Summer Sunglasses',
        "ratings": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.5}
            isDisabled={false}
            style={{ paddingVertical: 10 }}
        />,
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "price": '11',
        "plusicon": 'plus',
        "discount": 'Up to 3% Off',
        "hospitalname": 'Sunny Shine'
    },
    {
        "id": 2,
        "image": images.HomeNewArrivalsImg2,
        "text": 'Cat 100% Herbal Shampo',
        "ratings": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.5}
            isDisabled={false}
            style={{ paddingVertical: 10 }}
        />,
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "price": '4.56',
        "plusicon": 'plus',
        "discount": 'Up to 5% Off',
        "hospitalname": 'Canine'
    },
    {
        "id": 3,
        "image": images.HomeNewArrivalsImg3,
        "text": 'Solid Febrics Tent in Summer',
        "ratings": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.5}
            isDisabled={false}
            style={{ paddingVertical: 10 }}
        />,
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "price": '9.77',
        "plusicon": 'plus',
        "discount": 'Up to 10% Off',
        "hospitalname": 'Tent House'
    },
    {
        "id": 4,
        "image": images.HomeNewArrivalsImg4,
        "text": 'Cat Parlour Kit',
        "ratings": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.5}
            isDisabled={false}
            style={{ paddingVertical: 10 }}
        />,
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "price": '10.00',
        "plusicon": 'plus',
        "discount": 'Up to 3% Off',
        "hospitalname": 'Nany Sole'
    },
    {
        "id": 5,
        "image": images.HomeNewArrivalsImg1,
        "text": 'Summer Sunglasses',
        "ratings": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.5}
            isDisabled={false}
            style={{ paddingVertical: 10 }}
        />,
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "price": '6.77',
        "plusicon": 'plus',
        "discount": 'Up to 3% Off',
        "hospitalname": 'Sunny Shine'
    },
    {
        "id": 6,
        "image": images.HomeNewArrivalsImg2,
        "text": 'Cat 100% Herbal Shampo',
        "ratings": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.5}
            isDisabled={false}
            style={{ paddingVertical: 10 }}
        />,
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "price": '4.56',
        "plusicon": 'plus',
        "discount": 'Up to 5% Off',
        "hospitalname": 'Canine'
    },
    {
        "id": 7,
        "image": images.HomeNewArrivalsImg3,
        "text": 'Solid Febrics Tent in Summer',
        "ratings": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.5}
            isDisabled={false}
            style={{ paddingVertical: 10 }}
        />,
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "price": '9.77',
        "plusicon": 'plus',
        "discount": 'Up to 10% Off',
        "hospitalname": 'Tent House'
    },
]
export const MedicineFalteList = [
    {
        "id": 1,
        "image": images.HometopselingImg1,
        "backgroundColor": 'hsl(134.7, 60.5%, 15.9%)',
        "ratings": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }}
        />,
        "plusicon": 'plus-square',
        "price": '4',
        "hospitalname": 'Dog Food - Chicken & Egg, Puppy',
        "text": 'Drools',
    },
    {
        "id": 2,
        "image": images.HometopselingImg2,
        "text": '70% Off',
        "backgroundColor": 'hsl(134.7, 60.5%, 15.9%)',
        "ratings": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }}
        />,
        "plusicon": 'plus-square',
        "price": '5',
        "hospitalname": 'Moochie Beauty skin & coat',
        "text": 'Moochie',
    },
    {
        "id": 3,
        "image": images.HometopselingImg3,
        "text": '70% Off',
        "backgroundColor": 'hsl(134.7, 60.5%, 15.9%)',
        "ratings": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }}
        />,
        "plusicon": 'plus-square',
        "price": '6',
        "hospitalname": 'Canine Creek Starter Dry Dog Food, Ultra Premium - 1.5 Kg',
        "text": 'Canine',
    },
]
export const carouselImages = [
    {
        "id": 1,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag} />,
        "text": 'Baby Care',
        "texttwo": 'Avastin Pharmacy',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },
    {
        "id": 2,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "text": 'Health & Nutrition',
        "texttwo": 'Herceptin Pharmacy',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },
    {
        "id": 3,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "text": 'Women Care',
        "texttwo": 'arthak Hospital and ICU',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },
    {
        "id": 4,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "text": 'Personal Care',
        "texttwo": 'Herceptin Pharmacy Pharmacy',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },
    {
        "id": 5,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "text": 'Ayurveda',
        "texttwo": 'Shree Navjivan Children Hospital',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },
    {
        "id": 6,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_six} />,
        "text": 'Health Devices',
        "texttwo": 'Sahyog Hospital Pvt. Ltd.',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },
    {
        "id": 7,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "text": 'Home Essentials',
        "texttwo": 'MabThera/Rituxan',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },
    {
        "id": 8,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "text": 'Apollo Life',
        "texttwo": 'MabThera/Rituxan',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },
    {
        "id": 9,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "text": 'Health Condition',
        "texttwo": 'Covid Essentials',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },
    {
        "id": 10,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "text": 'Covid Essentials',
        "texttwo": 'Prime Hospital',
        "textthree": '250',
        "textfour": '200',
        "fulldiscounttext": '50% OFF',
    },

]
export const Discountdata = [
    {
        "id": 1,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '25% OFF',
        "text": 'Health & Nutrition',
        "texttwo": 'Sahyog Hospital Pvt. Ltd.',
        "textthree": '250',
        "textfour": '200',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={25} color={'#C8C8C8'} />,
    },
    {
        "id": 2,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '25% OFF',
        "text": 'Health Condition',
        "texttwo": 'MabThera/Rituxan',
        "textthree": '250',
        "textfour": '200',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 3,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '25% OFF',
        "text": 'Apollo Life',
        "texttwo": 'arthak Hospital and ICU',
        "textthree": '250',
        "textfour": '200',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 4,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '25% OFF',
        "text": 'Home Essentials',
        "texttwo": 'Herceptin Pharmacy',
        "textthree": '250',
        "textfour": '200',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 5,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_six} />,
        "fulldiscounttext": '25% OFF',
        "text": 'Health Devices',
        "texttwo": 'Avastin Pharmacy',
        "textthree": '250',
        "textfour": '200',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 6,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '25% OFF',
        "text": 'Ayurveda',
        "texttwo": 'Covid Essentials',
        "textthree": '250',
        "textfour": '200',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 7,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '25% OFF',
        "text": 'Personal Care',
        "texttwo": 'Shree Navjivan Children Hospital',
        "textthree": '250',
        "textfour": '200',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
]
export const orderlist = [
    {
        "id": 1,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="contain" source={images.Baby_care_imag} />,
        "text": 'Augmentin Duo Tablet',
        "textsmall": 'Yesterday 3pm',
        "price": '190',
        "paregraphtetx": 'Strip of 10 tablets Glaxo SmithKline Pharmaceuticals Ltd',
    },
    {
        "id": 2,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="contain" source={images.Docter_tablet_imag} />,
        "text": 'Azithral 500 Tablet',
        "textsmall": 'Yesterday 3pm',
        "price": '124',
        "paregraphtetx": 'Azithral 500 Tablet is an antibiotic used to treat various types of bacterial infections of the respiratory tract, ear, nose, throat, lungs, skin, and eye in adults and children.',
    },
    {
        "id": 3,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="contain" source={images.Baby_care_imag} />,
        "text": 'Ascoril LS Syrup',
        "textsmall": 'Yesterday 3pm',
        "price": '150',
        "paregraphtetx": 'Ascoril LS Syrup is a combination medicine used in the treatment of cough with mucus. It thins mucus in the nose, windpipe, and lungs, making it easier to cough out.',
    },
    {
        "id": 4,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="contain" source={images.Baby_care_imag_six} />,
        "text": 'Anovate Cream',
        "textsmall": 'Yesterday 3pm',
        "price": '165',
        "paregraphtetx": 'Ascoril LS Syrup is a combination medicine used in the treatment of cough with mucus.',
    },
    {
        "id": 5,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="contain" source={images.Baby_care_imag_six} />,
        "text": 'Ambrodil-S Syrup',
        "textsmall": 'Yesterday 3pm',
        "price": '217',
        "paregraphtetx": 'Azithral 500 Tablet is an antibiotic used to treat various types of bacterial infections of the respiratory tract, ear, nose, throat, lungs, skin, and eye in adults and children.',
    },
    {
        "id": 6,
        "image": <Image style={Style.imagsetstylefoodyitemdata} resizeMode="contain" source={images.Baby_care_imag} />,
        "text": 'Alex Syrup',
        "textsmall": 'Yesterday 3pm',
        "price": '120',
        "paregraphtetx": 'It is beneficial to have plenty of fluids while taking this medication.',
    },
]
export const Popularrestrurnt = [
    {
        "id": 1,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '50% OFF',
        "text": 'Alex Syrup',
        "texttwo": 'MabThera/Rituxan',
        "textthree": '150',
        "textfour": '390',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={25} color={'#C8C8C8'} />,
    },
    {
        "id": 2,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '50% OFF',
        "text": 'Ambrodil-S Syrup',
        "texttwo": 'Sahyog Hospital Pvt. Ltd.',
        "textthree": '200',
        "textfour": '400',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 3,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '50% OFF',
        "text": 'Anovate Cream',
        "texttwo": 'Shree Navjivan Children Hospital',
        "textthree": '170',
        "textfour": '480',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 4,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '50% OFF',
        "text": 'Ascoril LS Syrup',
        "texttwo": 'Herceptin Pharmacy Pharmacy',
        "textthree": '100',
        "textfour": '389',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 5,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '50% OFF',
        "text": 'Azithral 500 Tablet',
        "texttwo": 'Arthak Hospital',
        "textthree": '145',
        "textfour": '420',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 6,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Docter_tablet_imag} />,
        "fulldiscounttext": '50% OFF',
        "text": 'Augmentin Duo Tablet',
        "texttwo": 'Herceptin Pharmacy',
        "textthree": '174',
        "textfour": '379',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
    {
        "id": 7,
        "image": <Image style={Style.setboximage} resizeMode="contain" source={images.Baby_care_imag_five} />,
        "fulldiscounttext": '50% OFF',
        "text": 'Ascoril LS Syrup',
        "texttwo": 'Avastin Pharmacy',
        "textthree": '123',
        "textfour": '435',
        "freedelevary": 'Free Delivery',
        "seticonview": <IconR name="bookmark" style={Style.iconbookmark} size={20} color={'#C8C8C8'} />,
    },
]
export const FastPharmacyOfferTab = [
    {
        "id": 1,
        "title": "UP TO 33% 0FF",
        "settext": 'Banana',
        "backgroundColor": 'hsl(0.7, 79.4%, 43.7%)',
        "image": <Image style={Style.setboxtopimage} resizeMode='contain' source={images.app_logo} />,
    },
    {
        "id": 2,
        "title": "60x% 0FF",
        "settext": 'Shampoo',
        "backgroundColor": 'hsl(24.5, 100%, 46.7%)',
        "image": <Image style={Style.setboxtopimage} resizeMode='contain' source={images.app_logo} />,
    },
    {
        "id": 3,
        "title": "UP TO 33% 0FF",
        "settext": 'Olive Oil',
        "backgroundColor": 'hsl(39.8, 100%, 47.3%)',
        "image": <Image style={Style.setboxtopimage} resizeMode='contain' source={images.Docter_tablet_imag} />,
    },
    {
        "id": 4,
        "title": "UP TO 33% 0FF",
        "settext": 'Snacks',
        "backgroundColor": 'hsl(0.7, 79.4%, 43.7%)',
        "image": <Image style={Style.setboxtopimage} resizeMode='contain' source={images.app_logo} />,
    },
    {
        "id": 5,
        "title": "UP TO 33% 0FF",
        "settext": 'Tomato',
        "backgroundColor": 'hsl(24.5, 100%, 46.7%)',
        "image": <Image style={Style.setboxtopimage} resizeMode='contain' source={images.app_logo} />,
    },
    {
        "id": 6,
        "title": "UP TO 33% 0FF",
        "settext": 'Meggie',
        "backgroundColor": 'hsl(39.8, 100%, 47.3%)',
        "image": <Image style={Style.setboxtopimage} resizeMode='contain' source={images.app_logo} />,
    },
]
export const Tabletname = [
    {
        "id": 1,
        "text": 'Pet House',
    },
    {
        "id": 2,
        "text": 'Dog Food',
    },
    {
        "id": 3,
        "text": 'Cat Food',
    },
    {
        "id": 4,
        "text": 'Accessory',
    },
    {
        "id": 5,
        "text": 'Washing Product',
    },
    
]
export const HospitalListingdata = [

    {
        "id": 1,
        "image": <Image style={Style.imagsetstylefredrice} resizeMode="contain" source={images.Search_Popular_screen_img1} />,
        "hospitalname": 'Pet House',
        "text": 'Penta House',

    },
    {
        "id": 2,
        "image": <Image style={Style.imagsetstylefredrice} resizeMode="contain" source={images.Search_Popular_screen_img2} />,
        "hospitalname": 'Dog Harness',
        "text": 'Degy',
    },
    {
        "id": 3,
        "image": <Image style={Style.imagsetstylefredrice} resizeMode="contain" source={images.Search_Popular_screen_img3} />,
        "hospitalname": 'Meat',
        "text": 'Flaviya ',
    },
    {
        "id": 4,
        "image": <Image style={Style.imagsetstylefredrice} resizeMode="contain" source={images.Search_Popular_screen_img4} />,
        "hospitalname": 'Classic',
        "text": 'Red Mate',
    },
    {
        "id": 5,
        "image": <Image style={Style.imagsetstylefredrice} resizeMode="contain" source={images.Search_Popular_screen_img5} />,
        "hospitalname": 'Milk',
        "text": 'Dorola',
    },
    {
        "id": 6,
        "image": <Image style={Style.imagsetstylefredrice} resizeMode="contain" source={images.Search_Popular_screen_img6} />,
        "hospitalname": 'Food Packet',
        "text": 'French Foody',
    },
    {
        "id": 7,
        "image": <Image style={Style.imagsetstylefredrice} resizeMode="contain" source={images.Search_Popular_screen_img7} />,
        "hospitalname": 'Face Mask',
        "text": 'Louse',
    },
 
]

export const FavrouteItemList = [
    {
        "id": 1,
        "image": images.Product_screen_img1,
        "text": 'Barks & Wags Plaid Pet House',
        "price": '10.00',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.9)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": '(S, Pink Plaid)'
    },
    {
        "id": 2,
        "image": images.Product_screen_img2,
        "text": 'Pets Like Dog Combo Dog Harness for Puppy| Easy Walk',
        "price": '30.0',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.5)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'size (S, M, L)'
    },
    {
        "id": 3,
        "image": images.Product_screen_img3,
        "text": 'Meat Up Meat and Rice Adult Dry Dog Food 10kg',
        "price": '18.05',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.2}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.2)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": '(Buy 1 Get 1 Free)'
    },
    {
        "id": 4,
        "image": images.Product_screen_img4,
        "text": 'Classic Pet Chunk Dog Food - Adult, Chicken Flavour, Medium',
        "price": '15.5',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.4}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.4)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": '1.2 Kg'
    },
    {
        "id": 5,
        "image": images.Product_screen_img5,
        "text": 'Woof Natural Chicken and Milk',
        "price": '19.10',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.9)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": ' 2.2 kg'
    },
    {
        "id": 6,
        "image": images.Product_screen_img6,
        "text": 'Drools Optimum Performance Adult Dry Dog Food, Chicken Flavor',
        "price": '16.5',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.5)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": '10kg'
    },
  
]

export const CategoryData = [
    {
        "id": 1,
        "image": images.Animal_img1,    
        "hospitalname": 'Cat',
        // "redirect": RouteName.PRODUCT_TAB
    },
    {
        "id": 2,
        "image": images.Animal_img2,   
        "hospitalname": 'Chihuahuas',
        // "redirect": RouteName.PRODUCT_TAB
    },
    {
        "id": 3,
        "image": images.Animal_img3,      
        "hospitalname": 'Bunny ',
        // "redirect": RouteName.PRODUCT_TAB
    },
    {
        "id": 4,
        "image": images.Animal_img4,      
        "hospitalname": 'Chesapeake Bay Retriever',
        // "redirect": RouteName.PRODUCT_TAB
    },
    {
        "id": 5,
        "image": images.Animal_img5, 
        // "redirect": RouteName.PRODUCT_TAB, 
        "hospitalname": 'shetland sheepdog'
    },
    {
        "id": 6,
        "image": images.Animal_img6,  
        // "redirect": RouteName.PRODUCT_TAB, 
        "hospitalname": 'Border Collie'
    },
    {
        "id": 7,
        "image": images.Animal_img7,    
        // "redirect": RouteName.PRODUCT_TAB, 
        "hospitalname": 'Labrador Retriever'
    },
    {
        "id": 8,
        "image": images.Animal_img8,  
        // "redirect": RouteName.PRODUCT_TAB, 
        "hospitalname": 'Shih Tzu'
    },
    {
        "id": 9,
        "image": images.Animal_img9,    
        // "redirect": RouteName.PRODUCT_TAB, 
        "hospitalname": 'Akita Inu'
    },   
    {
        "id": 10,
        "image": images.Animal_img10,  
        // "redirect": RouteName.PRODUCT_TAB, 
        "hospitalname": 'Pembroke Welsh Corgi'
    },
    {
        "id": 11,
        "image": images.Animal_img11,  
        // "redirect": RouteName.PRODUCT_TAB, 
        "hospitalname": 'Pembroke Welsh Corgi'
    },
    {
        "id": 12,
        "image": images.Animal_img12,  
        // "redirect": RouteName.PRODUCT_TAB, 
        "hospitalname": 'Pug'
    },
]

export const ProductCategoryData = [
    {
        "id": 1,
        "image": images.category_IMG1,    
        "hospitalname": 'Cat Food',
        // "redirect": RouteName.PRODUCT_TAB
    },
    {
        "id": 2,
        "image": images.category_IMG2,   
        "hospitalname": 'Pedigree',
        // "redirect": RouteName.PRODUCT_TAB
    },
    {
        "id": 3,
        "image": images.category_IMG3,      
        "hospitalname": 'Dog Raincoat',
        // "redirect": RouteName.PRODUCT_TAB
    },
    {
        "id": 4,
        "image": images.category_IMG4,      
        "hospitalname": 'Omega 3',
        // "redirect": RouteName.PRODUCT_TAB
    },
    {
        "id": 5,
        "image": images.category_IMG5, 
        // "redirect": RouteName.PRODUCT_TAB, 
        "hospitalname": 'Safty Belt'
    },
    {
        "id": 6,
        "image": images.category_IMG6,  
        // "redirect": RouteName.PRODUCT_TAB, 
        "hospitalname": 'Pet Combo'
    },
    {
        "id": 7,
        "image": images.category_IMG7,    
        // "redirect": RouteName.PRODUCT_TAB, 
        "hospitalname": 'Pet Gromming'
    },
    {
        "id": 8,
        "image": images.category_IMG8,  
        // "redirect": RouteName.PRODUCT_TAB, 
        "hospitalname": 'Pet Supplements'
    },
    {
        "id": 9,
        "image": images.category_IMG9,    
        // "redirect": RouteName.PRODUCT_TAB, 
        "hospitalname": 'Pet Beds'
    },   
    {
        "id": 10,
        "image": images.category_IMG10,  
        // "redirect": RouteName.PRODUCT_TAB, 
        "hospitalname": 'Leashes'
    },
    {
        "id": 11,
        "image": images.category_IMG11,  
        // "redirect": RouteName.PRODUCT_TAB, 
        "hospitalname": 'Water and Food Bowls'
    },
    {
        "id": 12,
        "image": images.category_IMG12,  
        // "redirect": RouteName.PRODUCT_TAB, 
        "hospitalname": 'Food for a New Dog or Cat'
    },
]


export const ProductData = [
    {
        "id": 1,
        "image": images.testpets1,
        "text": 'Barks & Wags Plaid Pet House',
        "price": '10.00',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.9)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": '(S, Pink Plaid)'
    },
    {
        "id": 1,
        "image": images.testpets1,
        "text": 'Barks & Wags Plaid Pet House',
        "price": '10.00',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.9)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": '(S, Pink Plaid)'
    }, {
        "id": 1,
        "image": images.testpets1,
        "text": 'Barks & Wags Plaid Pet House',
        "price": '10.00',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.9)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": '(S, Pink Plaid)'
    }, {
        "id": 1,
        "image": images.testpets1,
        "text": 'Barks & Wags Plaid Pet House',
        "price": '10.00',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.9)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": '(S, Pink Plaid)'
    },
    {
        "id": 2,
        "image": images.Product_screen_img2,
        "text": 'Pets Like Dog Combo Dog Harness for Puppy| Easy Walk',
        "price": '30.0',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.5)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Lorium lipsum'
    },
    {
        "id": 3,
        "image": images.Product_screen_img3,
        "text": 'Meat Up Meat and Rice Adult Dry Dog Food 10kg',
        "price": '18.05',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.2}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.2)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": '(Buy 1 Get 1 Free)'
    },
    {
        "id": 4,
        "image": images.Product_screen_img4,
        "text": 'Classic Pet Chunk Dog Food - Adult, Chicken Flavour, Medium, 1.2 Kg',
        "price": '15.5',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.4}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.4)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Lorium lipsum'
    },
    {
        "id": 5,
        "image": images.Product_screen_img5,
        "text": 'Woof Natural Chicken and Milk, 2.2 kg ',
        "price": '19.10',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.9)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Lorium lipsum'
    },
    {
        "id": 6,
        "image": images.Product_screen_img6,
        "text": 'Drools Optimum Performance Adult Dry Dog Food, Chicken Flavor',
        "price": '16.5',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.5)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": '10kg'
    },
    {
        "id": 7,
        "image": images.Product_screen_img7,
        "text": 'DOGISTA PET PRODUCTS Dog Mouth contain ',
        "price": '14.00',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.3}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.3)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Muzzle- S (Beige, Size-2), Small'
    },
    {
        "id": 8,
        "image": images.Product_screen_img8,
        "text": 'ELTON Stainless Steel Bowls with Colorful Powder Coating Outside',
        "price": '18.00',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.8}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.8)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Very Small'
    },
]

export const vegetablesdata = [
    {
        "id": 1,
        "image": images.banana_img,
        "text": 'Fresh Banana',
        "price": '10.00',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.9)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Fruit Boulevard'
    },
    {
        "id": 2,
        "image": images.chocolate_img,
        "text": 'Dark Chocolate',
        "price": '30.0',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.5)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Dairy Milk'
    },
    {
        "id": 3,
        "image": images.almond_bowl_img,
        "text": 'Almond',
        "price": '18.05',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.2}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.2)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Dry Fuits Store'
    },
    {
        "id": 4,
        "image": images.red_apple_img,
        "text": 'Red Apple',
        "price": '15.5',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.4}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.4)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Club Juicy Store'
    },
    {
        "id": 5,
        "image": images.snacks_img,
        "text": 'Potato Wafers',
        "price": '19.10',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.9)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Snack Store'
    },
    {
        "id": 6,
        "image": images.hand_sanitizer_img,
        "text": 'Hand Sanitizer',
        "price": '16.5',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.5)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Health Magic'
    },
    {
        "id": 7,
        "image": images.pineapple_img,
        "text": 'Pineapple',
        "price": '14.00',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.3}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.3)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Whole Fruits Store'
    },
    {
        "id": 8,
        "image": images.nail_polish_img,
        "text": 'Nail Paints',
        "price": '18.00',
        "iconplusset": <IconS name="plus" size={20} color={'white'} />,
        "ratingsset": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.8}
            isDisabled={false}
            style={{ paddingVertical: 5 }} />,
        "ratingtext": '(4.8)',
        "hearticon": 'hearto',
        "unhearticon": 'heart',
        "hospitalname": 'Colour Fashion'
    },
]

export const Foodsdetaileslistingpage = [
    {
        "id": 1,
        "image": images.Docter_tablet_imag,
        "text": '30 Min',
        "rescuedtext": 'RESCUED',
        "fulldiscounttext": '50% OFF',
        "textbold": 'Avastin Pharmacy',
        "textgray": 'Amixide-H Tablet',
        "text4_5": '4.5',
        "seticon": <IconS name="star" size={12} />,
        "rupistextone": '250',
        "rupistext": '125',
        "fireicon": <IconA name="local-fire-department" color={'#E89528'} size={16} />,
        "onefortycal": '145 cal',
        "paregrapgtext": 'Left over Pharmacy and supplies are gathered and sold for 50% off!',
    },
    {
        "id": 2,
        "image": images.Docter_tablet_imag_two,
        "text": '20 Min',
        "rescuedtext": 'RESCUED',
        "fulldiscounttext": '50% OFF',
        "textbold": 'Herceptin Pharmacy',
        "textgray": 'Alex Cough Lozenges Lemon Ginger',
        "text4_5": '4.5',
        "seticon": <IconS name="star" size={12} />,
        "rupistextone": '250',
        "rupistext": '125',
        "fireicon": <IconA name="local-fire-department" color={'#E89528'} size={16} />,
        "onefortycal": '145 cal',
        "paregrapgtext": 'Left over Pharmacy and supplies are gathered and sold for 50% off!',
    },
    {
        "id": 3,
        "image": images._three,
        "text": '15 Min',
        "rescuedtext": 'RESCUED',
        "fulldiscounttext": '50% OFF',
        "textbold": 'Arthak Hospital and ICU',
        "textgray": 'Atorva Tablet',
        "text4_5": '4.5',
        "seticon": <IconS name="star" size={12} />,
        "rupistextone": '250',
        "rupistext": '125',
        "fireicon": <IconA name="local-fire-department" color={'#E89528'} size={16} />,
        "onefortycal": '145 cal',
        "paregrapgtext": 'Left over Pharmacy and supplies are gathered and sold for 50% off!',
    },
    {
        "id": 4,
        "image": images.Docter_tablet_imag_four,
        "text": '37 Min',
        "rescuedtext": 'RESCUED',
        "fulldiscounttext": '50% OFF',
        "textbold": 'Herceptin Pharmacy Pharmacy',
        "textgray": 'Asthalin Respules',
        "text4_5": '4.5',
        "seticon": <IconS name="star" size={12} />,
        "rupistextone": '250',
        "rupistext": '125',
        "fireicon": <IconA name="local-fire-department" color={'#E89528'} size={16} />,
        "onefortycal": '145 cal',
        "paregrapgtext": 'Left over Pharmacy and supplies are gathered and sold for 50% off!',
    },
    {
        "id": 5,
        "image": images.Docter_tablet_imag_six,
        "text": '26 Min',
        "rescuedtext": 'RESCUED',
        "fulldiscounttext": '50% OFF',
        "textbold": 'Shree Navjivan Children Hospital',
        "textgray": 'Aptimust Syrup',
        "text4_5": '4.5',
        "seticon": <IconS name="star" size={12} />,
        "rupistextone": '250',
        "rupistext": '125',
        "fireicon": <IconA name="local-fire-department" color={'#E89528'} size={16} />,
        "onefortycal": '145 cal',
        "paregrapgtext": 'Left over Pharmacy and supplies are gathered and sold for 50% off!',
    },
    {
        "id": 6,
        "image": images.Docter_tablet_imag_saven,
        "text": '30 Min',
        "rescuedtext": 'RESCUED',
        "fulldiscounttext": '50% OFF',
        "textbold": 'Sahyog Hospital Pvt. Ltd.',
        "textgray": 'Acemiz -MR Tablet',
        "text4_5": '4.5',
        "seticon": <IconS name="star" size={12} />,
        "rupistextone": '250',
        "rupistext": '125',
        "fireicon": <IconA name="local-fire-department" color={'#E89528'} size={16} />,
        "onefortycal": '145 cal',
        "paregrapgtext": 'Left over Pharmacy and supplies are gathered and sold for 50% off!',
    },
    {
        "id": 7,
        "image": images.Docter_tablet_imag_aeight,
        "text": '34 Min',
        "rescuedtext": 'RESCUED',
        "fulldiscounttext": '50% OFF',
        "textbold": 'MabThera/Rituxan',
        "textgray": 'Angispan - TR 2.5mg Capsule',
        "text4_5": '4.5',
        "seticon": <IconS name="star" size={12} />,
        "rupistextone": '250',
        "rupistext": '125',
        "fireicon": <IconA name="local-fire-department" color={'#E89528'} size={16} />,
        "onefortycal": '145 cal',
        "paregrapgtext": 'Left over Pharmacy and supplies are gathered and sold for 50% off!',
    },
]
export const yourorderdata = [
    {
        "id": 1,
        "image": images.MyOrder_screen_img1,
        "vadapavtext": 'Dog House',
        "sitytext": '(4.7)',
        // "weight": 'Weight 1 Kg',
        "price": '1 x $10',   
        "repeatorder": 'Delivered',
        "icontwo":'checkmark-done',
    },
    {
        "id": 2,
        "image": images.MyOrder_screen_img2,
        "vadapavtext": 'Dog Harness',
        "sitytext": '(4.9)',
        // "weight": 'Weight 250 ml',
        "price": '1 x $25',
        "rejected": 'Rejected',
        "repeatorder": 'Repeat',
        "icon":'closecircle',
        "icontwo":'refresh',
    },
    {
        "id": 3,
        "image": images.MyOrder_screen_img3,
        "vadapavtext": 'Meat up Meat',
        "sitytext": '(4.5)',
        // "weight": 'Weight 5 kg',
        "price": '2 x $17',
        "repeatorder": 'Delivered',
        "icontwo":'checkmark-done',
    },
    {
        "id": 4,
        "image": images.MyOrder_screen_img4,
        "vadapavtext": 'Classic Food',
        "sitytext": '(4.8)',
        // "weight": 'Weight 20 ml',
        "price": '1 x $10',
        "repeatorder": 'Delivered',
        "icontwo":'checkmark-done',
    },
    {
        "id": 5,
        "image": images.MyOrder_screen_img5,
        "vadapavtext": 'Woof Natural Milk',
        "sitytext": '(4.5)',
        // "weight": 'Weight 2 kg',
        "price": '3 x $30',
        "repeatorder": 'Delivered',
        "icontwo":'checkmark-done',
    },
    {
        "id": 6,
        "image": images.MyOrder_screen_img6,
        "vadapavtext": 'Nutrition Food Pack',
        "sitytext": '(4.5)',
        // "weight": 'Weight 800 gm',
        "price": '2 x $25',
        "rejected": 'Rejected',
        "repeatorder": 'Repeat',
        "icon":'closecircle',
        "icontwo":'checkmark-done',
    },
    {
        "id": 7,
        "image": images.MyOrder_screen_img7,
        "vadapavtext": 'Small Face Mask',
        "sitytext": '(4.9)',
        // "weight": 'Weight 250 gm',
        "price": '2 x $22',
        "repeatorder": 'Delivered',
        "icontwo":'checkmark-done',
    },
    {
        "id": 8,
        "image": images.MyOrder_screen_img8,
        "vadapavtext": 'Stainless Meat Jug',
        "sitytext": '(4.5)',
        // "weight": 'Weight 0.5 kg',
        "price": '2 x $15',
        "rejected": 'Rejected',
        "repeatorder": 'Repeat',
        "icon":'closecircle',
        "icontwo":'checkmark-done',
    },
]
export const setuserparfromance = [
    {
        "id": 1,
        "title": "user 1",
        "seticonview": <IconE name="check" size={20} color={'#4FA987'} />,
    },
    {
        "id": 2,
        "title": "user 2",
        "seticonview": <IconE name="check" size={20} color={'#4FA987'} />,
    },
    {
        "id": 3,
        "title": "user 3",
        "seticonview": <IconE name="close" size={20} color={'red'} />,
    },
    {
        "id": 4,
        "title": "user 4",
        "seticonview": <IconE name="close" size={20} color={'red'} />,
    }
]
export const orderlistyourperfromance = [
    {
        "id": 1,
        "image": <Image style={Style.imageroundyorgrprrfromance} resizeMode="contain" source={images.Foode_one_img} />,
        "text": 'Fried Rice',
        "textsmall": 'Yesterday 3pm',
        "price": '250',
        "paregraphtetx": 'Desi, Middle-Eastern',
    },
    {
        "id": 2,
        "image": <Image style={Style.imageroundyorgrprrfromance} resizeMode="contain" source={images.Foode_one_img} />,
        "text": 'KFC Combo',
        "textsmall": 'Yesterday 3pm',
        "price": '250',
        "paregraphtetx": '1 Kacchi biriyani',
    },
    {
        "id": 3,
        "image": <Image style={Style.imageroundyorgrprrfromance} resizeMode="contain" source={images.Foode_one_img} />,
        "text": 'KFC Combo',
        "textsmall": 'Yesterday 3pm',
        "price": '250',
        "paregraphtetx": '1 Kacchi biriyani',
    },
    {
        "id": 4,
        "image": <Image style={Style.imageroundyorgrprrfromance} resizeMode="contain" source={images.Foode_one_img} />,
        "text": 'KFC Combo',
        "textsmall": 'Yesterday 3pm',
        "price": '250',
        "paregraphtetx": '1 Kacchi biriyani',
    },
    {
        "id": 5,
        "image": <Image style={Style.imageroundyorgrprrfromance} resizeMode="contain" source={images.Foode_one_img} />,
        "text": 'KFC Combo',
        "textsmall": 'Yesterday 3pm',
        "price": '250',
        "paregraphtetx": '1 Kacchi biriyani',
    },
    {
        "id": 6,
        "image": <Image style={Style.imageroundyorgrprrfromance} resizeMode="contain" source={images.Foode_one_img} />,
        "text": 'KFC Combo',
        "textsmall": 'Yesterday 3pm',
        "price": '250',
        "paregraphtetx": '1 Kacchi biriyani',
    },
]
export const Recentorderlist = [
    {
        "id": 1,
        "image": <Image style={Style.resetordersetbox} resizeMode="contain" source={images.Foode_one_img} />,
        "text": 'KFC Nuggets',
        "texttwo": 'Desi, Italian, +3 more',
        "textfour": '200',
        "freedelevary": 'Free Delivery',
    },
    {
        "id": 2,
        "image": <Image style={Style.resetordersetbox} resizeMode="contain" source={images.Foode_two_img} />,
        "text": 'Burger More',
        "texttwo": 'Burgers, Bevarages',
        "textfour": '200',
    },
    {
        "id": 3,
        "image": <Image style={Style.resetordersetbox} resizeMode="contain" source={images.Foode_three_img} />,
        "text": 'Hot Deals',
        "texttwo": 'Suhani Restaurant',
        "textfour": '190',
        "freedelevary": 'Free Delivery',
    },
    {
        "id": 4,
        "image": <Image style={Style.resetordersetbox} resizeMode="contain" source={images.Foode_five_img} />,
        "text": 'Hot Deals',
        "texttwo": 'Suhani Restaurant',
        "textfour": '260',
        "freedelevary": 'Free Delivery',
    },
    {
        "id": 5,
        "image": <Image style={Style.resetordersetbox} resizeMode="contain" source={images.Foode_aeight_img} />,
        "text": 'Hot Deals',
        "texttwo": 'Suhani Restaurant',
        "textfour": '240',
    },
    {
        "id": 6,
        "image": <Image style={Style.resetordersetbox} resizeMode="contain" source={images.Foode_saven_img} />,
        "text": 'Hot Deals',
        "texttwo": 'Suhani Restaurant',
        "textfour": '200',
        "freedelevary": 'Free Delivery',
    },
    {
        "id": 7,
        "image": <Image style={Style.resetordersetbox} resizeMode="contain" source={images.Foode_aeight_img} />,
        "text": 'Hot Deals',
        "texttwo": 'Suhani Restaurant',
        "textfour": '200',
        "freedelevary": 'Free Delivery',
    },
]
export const statelist = [
    {
        "id": 1,
        "textsimple": 'Flexon Tablet',
        "pricetextset": '43',
    },
    {
        "id": 2,
        "textsimple": 'Folvite 5mg Tablet',
        "pricetextset": '3',
    },
    {
        "id": 3,
        "textsimple": 'Indocap SR Capsule',
        "pricetextset": '76',
    },
    {
        "id": 1,
        "textsimple": 'Imodium Capsule',
        "pricetextset": '46',
    },
    {
        "id": 4,
        "textsimple": 'Ibugesic Plus Tablet',
        "pricetextset": '59',
    },
    {
        "id": 5,
        "textsimple": 'IPCA MMF 500 Tablet',
        "pricetextset": '22',
    },
    {
        "id": 6,
        "textsimple": 'Librax 5 mg/2.5 mg Tablet',
        "pricetextset": '16',
    },
    {
        "id": 7,
        "textsimple": 'Levocet Tablet',
        "pricetextset": '43',
    },
    {
        "id": 8,
        "textsimple": 'Omnacortil 10 Tablet DT',
        "pricetextset": '30',
    },
    {
        "id": 9,
        "textsimple": 'Okacet Tablet',
        "pricetextset": '39',
    },
    {
        "id": 10,
        "textsimple": 'Omnacortil Oral Solution',
        "pricetextset": '32',
    },
    {
        "id": 11,
        "textsimple": 'Orofer FCM Injection',
        "pricetextset": '48',
    },
    {
        "id": 12,
        "textsimple": 'Omez-Dsr Capsule',
        "pricetextset": '47',
    },
    {
        "id": 13,
        "textsimple": 'Regestrone 5mg Tablet',
        "pricetextset": '64',
    },
    {
        "id": 14,
        "textsimple": 'Rabesec-D SR Capsule',
        "pricetextset": '77',
    },
    {
        "id": 15,
        "textsimple": 'T-Bact 2% Ointment',
        "pricetextset": '13',
    },
    {
        "id": 16,
        "textsimple": 'TusQ-DX Liquid',
        "pricetextset": '8',
    },
    {
        "id": 17,
        "textsimple": 'Trajenta 5mg Tablet',
        "pricetextset": '10',
    },
    {
        "id": 18,
        "textsimple": 'Telmikind-AM Tablet',
        "pricetextset": '67',
    },
    {
        "id": 19,
        "textsimple": 'Thrombophob Gel',
        "pricetextset": '73',
    },
]
export const Slides = [
    {
        key: 's1',
        text: 'chevrons-right',
        longtitle: 'Best Price Guarantee',
        image: images.app_logo,
        imagetwo: images.Slider_one_img,
    },
    {
        key: 's2',
        text: 'chevrons-right',
        longtitletwo: 'Quality Assurance',
        image: images.app_logo,
        imagetwo: images.Slider_two_img,
    },
    {
        key: 's3',
        text: 'chevrons-right',
        longtitle: 'No Minimum Buy',
        image: images.app_logo,
        imagetwo: images.Slider_three_img,
    },
]

export const DoctorListData = [
    {
        id: 1,
        doctorImg: images.HomeDoctor1,
        rate: '',
        doctorname: 'Dr. Jeny',
        spec: 'veterinary doctor',
        "ratings": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.1}
            isDisabled={false}
            style={{ paddingVertical: 10 }}
        />,
        rating: '(4.1)'
    },
    {
        id: 2,
        doctorImg: images.HomeDoctor2,
        rate: '',
        doctorname: 'Dr. Allexa',
        spec: 'Animal Welfare',
        "ratings": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={3.5}
            isDisabled={false}
            style={{ paddingVertical: 10 }}
        />,
        rating: '(4.3)'
    },
    {
        id: 3,
        doctorImg: images.HomeDoctor3,
        rate: '',
        doctorname: 'Dr. Stephen',
        spec: 'Dentistry',
        "ratings": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={4.2}
            isDisabled={false}
            style={{ paddingVertical: 10 }}
        />,
        rating: '(4.5)'
    },
    {
        id: 4,
        doctorImg: images.HomeDoctor4,
        rate: '',
        doctorname: 'Dr. Steven',
        spec: 'Dermatology',
        "ratings": <Rating
            type='custom'
            ratingColor='#FFC000'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={16}
            startingValue={5.0}
            isDisabled={false}
            style={{ paddingVertical: 10 }}
        />,
        rating: '(4.1)'
    }
]