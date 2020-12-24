
const mongoose = require('mongoose');
const marked = require('marked');

//For sanitizing html in markdown
const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const dompurify = createDomPurify(new JSDOM().window);

const Schema = mongoose.Schema; //this "Schema" constructor allows us to create a new Schema.

//Instantiating Schema (Project data schema)
const projectSchema = new Schema({
  title: {
    type: String,  //data type
    required: true 
  },
  type: {
    type: String, //data type
    required: true
  },
  imageUrl: {
    type: String,
    required: true 
  },

  description: {
    type: String,
    required: true
  },

  longDescription: {
    type: String,
    required: true
  },

  userId: {
    type: Schema.Types.ObjectId, //mongodb data type
    ref: 'User',
    required: true
  },
  sanitizedHtml: {
    type: String,
    required: true
  }
  
});

//Markdown
projectSchema.pre('validate', function (next) {
  if(this.longDescription) {
    this.sanitizedHtml = dompurify.sanitize(marked(this.longDescription));
  }
  next();
})

// NOTE---------
// We know that noSQL (mongodb) is schemaless but here we are creating a schema that is coz whilst we have flexibility of not having a schema but it wants to u to focus only on data for that it needs to know how our data looks like.

module.exports = mongoose.model('Project', projectSchema);