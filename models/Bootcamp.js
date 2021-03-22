const mongoose = require('mongoose')
const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add name'],
        unique: true,
        trim: true,
        maxLength: [50, 'Name can not be more than 50 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add Description'],

        maxLength: [500, 'Desc can not be more than 500  characters']

    },
    website: {
        type: String,
       // match: [/https ?: \/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*),'Please use a valid URL ']
     
    },
    phone: {

        type: String,
        maxLength: [20, 'enter valid phone number']
    },
    email: {
        type: String,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Enter Valid Mail id'
        ]

    },
    address: {
        type: String,
        required: [true, 'Address is required ']
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
           // required: true
        },
        coordinates: {
            type: [Number],
           // required: true,
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String

    },
    careers: {
        type: [String],
        required: true,
        enum: ['Web Development', 'Mobile Development', 'UI/UX', 'Data Science', 'Business', 'other']

    },
    averageRating: {
        Type: Number,
        //min: [1, 'Rating must be atleast 1'],
        //max: [10, 'Rating can not be more than 10']

    },
    averageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    housing: {
        type: Boolean,
        dafault: false
    },
    jobAssistance: {
        type: Boolean,
        dafault: false
    },
    jobGuarantee: {
        type: Boolean,
        dafault: false
    },
    acceptGi: {
        type: Boolean,
        dafault: false
    },
    createdAt: {
        type: Date,
        default: Date.now()

    }

});
module.exports = mongoose.model('Bootcamp', BootcampSchema)