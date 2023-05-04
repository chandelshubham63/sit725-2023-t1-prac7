const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://shubham:shubham@cluster0.vozczre.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

client.connect(err => {
    if (!err) {
         console.log('DB Connected');
    } else {
        console.error(err);
    }
});

 module.exports = client;