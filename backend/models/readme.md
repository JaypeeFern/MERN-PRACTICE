<!-- ----------------------------------------------------------------------- -->
<!--             LIST OF MONGOOSE FUNCTIONS/METHODS USED SO FAR              -->
<!-- ----------------------------------------------------------------------- -->

1. TO CREATE NEW SCHEMA 
- const schemaName = new mongoose.Schema({
    fields: {
        type: '',
        required: true,
        ref: '' // Use if you are tracking the users who created the db object/data
    }
}, {
    timestamps: true
})

export default mongoose.model('modelName', schemaName)

<!-- ---------------------------------- x ---------------------------------- -->