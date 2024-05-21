const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors'); // To allow cross-origin requests (optional)
const bodyParser = require('body-parser'); // Add this line
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51Ox8ao00Q5gLy9r7A4wPMKzfCFXaxbE4uXts4T6ejoh72AI5NLC8AspPxHTqTEYuucj41I3KpqABpVi8men3cCDA00AeDVFitR'); // Replace with your Stripe secret key

const app = express();
app.use(cors()); // Enable CORS if necessary
app.use(bodyParser.json()); // Add this line
app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});
// admin.initializeApp({
//   credential: admin.credential.cert(require('./my-petsproject-firebase-adminsdk-p4fen-eaada982ef.json')),
// });
// app.post('/send-notification', async (req, res) => {
//     const { notificationData, deviceToken } = req.body; // Extract data from request body
  
//     try {
//       const message = {
//         notification: {
//           title: notificationData.title,
//           body: notificationData.body,
//         },
//         token: deviceToken || 'cQSWf4JqSU-TijlwWOVMg9:APA91bFCHikL-Nbd2rUrvsXJAiKhSTCyGtrJq88-t-K9OI6h_8K2zWEB4Z_5p_fuDBsTxg2-kniSAybyydXaDnZyW48-mBTx2T4nwW8a4mVfM2Tfs0doqTJOtxhYKOkdfPQmKZpt3CGa', // Include device token if provided
//       };
  
//       const response = await admin.messaging().send(message);
//       console.log('Notification sent successfully:', response);
//       res.json({ message: 'Notification sent successfully!' });
//     } catch (error) {
//       console.error('Error sending notification:', error);
//       res.status(500).json({ message: 'Failed to send notification' });
//     }
//   });
  const port = process.env.PORT || 3000; // Use environment variable for port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});