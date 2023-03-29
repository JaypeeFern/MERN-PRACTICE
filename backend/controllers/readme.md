<!-- ----------------------------------------------------------------------- -->
<!--            LIST OF CONTROLLER METHODS/FUNCTIONS USED SO FAR             -->
<!-- ----------------------------------------------------------------------- -->

<!-- ---------------------- NOTICE: always use await ----------------------- -->

1. find() - If left blank it will return all documents in collection
   Arguments: object
2. create() - will create new document in the colleciton\
   Argument: object { useFieldsDeclaredInTheSchema }
3. findById(req.params.id) - will find the document based on a given ID
   Argument: Document ID
4. findByIdAndUpdate() = will find the document in the collection and update it
   Arguments: ID, Object { new: true } // ????????
5. deleteOne() = will delete a single document based on the inputted ID/Doc ID

<!-- ----------------------------------------------------------------------- -->
<!--                              BCRYPT SYNTAX                              -->
<!-- ----------------------------------------------------------------------- -->

// The number of rounds of hashing
const salt = await bcrypt.genSalt(10)
// Hashing of the password / Arguments: body.password, salt variable
const hashedPassword = await bcrypt.hash(password, salt)

<!-- --------------------- PASSWORD COMPARING IF EXIST --------------------- -->

if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: null
    })
} else {
    res.status(400)
    throw new Error("There is no account with thosecredentials")
}

