const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/listOfItem"; //connecting to ciphertrick
const options = {
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    useNewUrlParser: true
};

mongoose.connect(mongoURI, options);

mongoose.connection.on('connected', ()=&gt;{  
    console.log('Mongoose default connection open to ' + mongoURI);
});

// If the connection throws an error
mongoose.connection.on('error', (err)=&gt;{  
    console.log('handle mongo errored connections: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', ()=&gt;{  
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', ()=&gt;{
    mongoose.connection.close(()=&gt;{
        console.log('App terminated, closing mongo connections');
        process.exit(0);
    });
});