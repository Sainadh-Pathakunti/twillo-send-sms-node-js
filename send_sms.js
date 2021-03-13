// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "------";
const authToken = "-------";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Twilli Node js integration done',
     from: '+12057728077',
     to: '+919640802037'
   })
  .then(message => console.log(message.sid));
