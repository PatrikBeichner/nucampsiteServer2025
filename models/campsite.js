const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

// Define the campsite schema with various fields and their validation requirements
const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true, // Name is required
        unique: true // Name must be unique
    },
    description: {
        type: String,
        required: true // Description is required
    },
    image: {
        type: String,
        required: true // Image URL is required
    },
    elevation: {
        type: Number,
        required: true // Elevation is required
    },
    cost: {
        type: Currency, // Custom type for currency
        required: true, // Cost is required
        min: 0 // Minimum value for cost is 0
    },
    featured: {
        type: Boolean,
        default: false // Default value for featured is false
    },
    comments: [{
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true // Rating is required and must be between 1 and 5
        },
        text: {
            type: String,
            required: true // Comment text is required
        },
        author: {
            type: String,
            required: true // Author is required
        }
    }]
}, {
    timestamps: true // Automatically add createdAt and updatedAt timestamps
});

// Create a model using the schema
const Campsite = mongoose.model('Campsite', campsiteSchema);

// Export the model
module.exports = Campsite;