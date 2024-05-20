import firestore from '@react-native-firebase/firestore';
import 'firebase/firestore';
import axios from 'axios'; // Add this line

const db = firestore();

export const addItemToNotifications = async (uid, item) => {
  const categorisedImages = {
    "General": "https://icones.pro/wp-content/uploads/2022/02/icone-de-cloche-et-d-alerte-violette.png",
    "adoption": "https://i.pinimg.com/736x/01/80/aa/0180aa58526930c0dc0961591fd6a9ef.jpg",
    "appointment": "https://as2.ftcdn.net/v2/jpg/02/68/46/77/1000_F_268467717_vEMz8PfPxLqSA6DkQoqqHQlvut2ofrmQ.jpg",
  };

  try {
    const { url, imageUri, category, message, token,timestamp} = item;
    const categoryImageUri = categorisedImages[category] || categorisedImages['General'];

    // Add item to Firestore
    await db.collection(`notifications/${uid}/items`).add({
      url: url || 'tab',
      imageUri: imageUri || categoryImageUri,
      category: category || 'General',
      message: message,
      timestamp:timestamp
    });
    console.log('Item added!');

    // Send notification
    axios.post('http://10.0.2.2:3000/send-notification', {
      notificationData: {
        title: category,
        body: message,
      },
      deviceToken: token,
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
  }
};

