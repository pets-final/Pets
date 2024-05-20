const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors'); // To allow cross-origin requests (optional)
const bodyParser = require('body-parser'); // Add this line

const app = express();
app.use(cors()); // Enable CORS if necessary
app.use(bodyParser.json()); // Add this line

admin.initializeApp({
  credential: admin.credential.cert(require('./my-petsproject-firebase-adminsdk-p4fen-eaada982ef.json')),
});
app.post('/send-notification', async (req, res) => {
    const { notificationData, deviceToken } = req.body; // Extract data from request body
  
    try {
      const message = {
        notification: {
          title: notificationData.title,
          body: notificationData.body,
        },
        token: deviceToken || 'cQSWf4JqSU-TijlwWOVMg9:APA91bFCHikL-Nbd2rUrvsXJAiKhSTCyGtrJq88-t-K9OI6h_8K2zWEB4Z_5p_fuDBsTxg2-kniSAybyydXaDnZyW48-mBTx2T4nwW8a4mVfM2Tfs0doqTJOtxhYKOkdfPQmKZpt3CGa', // Include device token if provided
      };
  
      const response = await admin.messaging().send(message);
      console.log('Notification sent successfully:', response);
      res.json({ message: 'Notification sent successfully!' });
    } catch (error) {
      console.error('Error sending notification:', error);
      res.status(500).json({ message: 'Failed to send notification' });
    }
  });
  const port = process.env.PORT || 3000; // Use environment variable for port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});