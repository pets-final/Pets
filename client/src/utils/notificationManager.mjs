// import admin from 'firebase-admin';
// const serviceAccount = {
//   "type": "service_account",
//   "project_id": "my-petsproject",
//   "private_key_id": "4e246458236c045b05322e40a66d43d959a5e436",
//   "private_key": "-----BEGIN PRIVATE KEY-----MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCaqD8yyUxrZ22L\ndSD1U1ceiD9xQntqeVRQnDX43umJXdqvt/KI0kXcODuMs2pSi9/PQ371Afhw39ZA\nhdqp5fBgZ7MmF6y7zcAUX3FCkT3mjtFxX9fLt/5d5r+0lrOkY+MWXVHSFxcZ+/og\nSlqLVXN6M6kJaABvK3oYmziOGVeG3KourLCsoNV8No+l/qre///H3iNWjbtGf5ge\noCJDUNf0I7BVmmmYe1AFEViC+/SdgEzQRA4NinOgC1xhHuGHrxYYTgTGtq/4dGxu\ntJhP+ZL3/D3pjcHkQ3L07519zAmMwa2iMWSla5Lvy+33/lpZlIAg4gENpqzyfjNm\nlMudzE0RAgMBAAECggEABTYzPwJilWH8Yo01aZ7/2hMMVERBxXJGQZsqBHN6mjrz\n8iT4Qt0XJpcsho7LP/HfvmvPXPFOjns0jKMWHdCWW6FS+68jjoad+PHIbs5XMCxS\n6YepzX8rTr3Gaw8DCcCl9+x4I+TMTf9cS/dFetmL1Svlf+Al15k2+ZpNexhmhzBe\nCvkTKtagAciJ9c61TDkxbl2+JTCkxfiguu/XxTi/bBF77pkImgBFKGyTXEfY2p37\njbT7aCWh2zXQsQFWWGQR6rBv3oThYaricvldUao9NLkqkxX4MyqghPLp1YffHqKi\no8WfP6YYjWY3IL1uKjQFUlyrh9XZqDveoN+TN25AoQKBgQDSvl/i3LL+FJr2x8gm\nncagSar+BK9aU17czgw4bFFSQveWDwgTsqqk28CoA868vF2nYZyda8FwVz/aS1E+\nJA6QkNBS1aqkdfLXyDLo+Ygh8sDSYShikHfASTNPlVyaJmxeOmD8xlyVQyznrx67\n8zDDiibgnvEaXclmr1Vd+a8MWQKBgQC73oWzzJdxswF1eTsVRfpMAyKRiPQAUhMH\nwPMdPbKJmLmT63c/ABW8aQqzhvoVdOOReQY+8nVDZ29O/LRFH4lNgwuRuNtfMgef\nrcXeDF3AMf2LYWKdgBh4eOoO6gjGOEj9wOxH9oytopA9/MSfFHk8dR3IkVLt2tUK\nTACIl0BPeQKBgAkjjFDwNSrjhdzRyRIzoVtuFmYxmdEW8HQu00TXHaetk8MEH9uK\n0e+YQACJObvhh0Ys63fAJoFSp0g2H+3L7n3CaeZNsbq0CrXkzqBfwdGHD2mQIQo1\nLZw/EGSRG5TruaNUcMRFbdpjMV1SsMiBwUmZghoXimkUTBmR3OfYXgjxAoGAMb3R\nGLHqxyfmEvxuMEu+4bFSzcW9FPimIT9tHyjexJ+zQv7tK7kSCDinpLDwNg4k0reA\nd9oqQhZ42ij+ce7Po742qfaP3ryYWCbiZNBRYjnaL7UxLxJjaEJbdmdwu0rbyJPz\n+3nD9ZU9K6xpQtVg5Cj+IcSYeHGgRoGpAoFJfcECgYEAqu8zz69ewURV3nFTKcDe\nV+28jyZQMkXzW87qqXQXXlWuPeyHffCgXlHCs0y5aT2+GopcrqUJoP8sY/zPLk0j\nO5r452andDO9NeucgRbUNT/p6p5A7/Peigd9qkYzwKqtYAvbxGejcyTrmGCTFEes\n7/Rs82Jnkh23qlwCPXEbiyk=-----END PRIVATE KEY-----",
//   "client_email": "firebase-adminsdk-p4fen@my-petsproject.iam.gserviceaccount.com",
//   "client_id": "105576426735983575569",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-p4fen%40my-petsproject.iam.gserviceaccount.com",
//   "universe_domain": "googleapis.com"
// }

// // Initialize Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// // Function to send a notification
// const sendNotification = async (title, body, deviceToken) => {
//   try {
//     // Define the message payload
//     const message = {
//       notification: {
//         title: title,
//         body: body,
//       },
//       token: deviceToken,
//     };

//     // Send the message
//     const response = await admin.messaging().send(message);
//     console.log('Successfully sent message:', response);
//     return response;
//   } catch (error) {
//     console.error('Error sending message:', error);
//     throw error;
//   }
// };

// export default sendNotification;
