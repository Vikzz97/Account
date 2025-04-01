let express = require('express');
let mongoose = require('mongoose');
const enquiryRouter = require('./App/routes/web/enquiryRoutes');
let PORT = require('dotenv').config();
let cors = require('cors')

let app = express();
app.use(cors())
app.use(express.json());


//Routes
app.use('/api/website/enquiry',enquiryRouter)

//http://localhost:10000/api/website/enquiry/insert


// connect to MongoDB
mongoose.connect(process.env.DBURL).then(()=>{
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 3000, ()=>{
        console.log('Server is running');
    });
}).catch((err)=>{console.log("Error");
})
