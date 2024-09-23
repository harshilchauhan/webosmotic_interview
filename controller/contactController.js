const Contact=require('../model/contactModel')
  
  
//create a new Contact
const createContact = async(req,res)=>{
    try {
        const {name,email,contactnumber} = req.body
        const newContact = new Contact({name:name,email:email,contactnumber:contactnumber})
        const response = await newContact.save()
        res.status(200).json({response:response,message:'Contact inserted Sucessfuly.'})
    } catch (error) {
        console.log(error.message);
        
        res.status(501).json({message:'internal server error.'}) 
    }
}

//update contact
const updateContact = async(req,res)=>{
    try {
        const contactId=req.params.id
        const {name,email,contactnumber} = req.body
        const updateContact = await Contact.findByIdAndUpdate(contactId,{name:name,email:email,contactnumber:contactnumber})
        res.status(200).json({response:updateContact,message:'contact updated.'})
    } catch (error) {
        res.status(501).json({message:'internal server error.'})
    }
}

//delete contact
const deleteContact = async(req,res)=>{
    try {
        const contactId=req.params.id
        const response = await Contact.findByIdAndDelete(contactId)
        res.status(200).json({response:response,message:'contact deleted.'})
    } catch (error) {
        res.status(501).json({message:'internal server error.'})
    }
}
//get all contact
const getAllContact = async(req,res)=>{
    try {
        const response = await Contact.find({})
        res.status(200).json({response:response})
    } catch (error) {
        res.status(501).json({message:'internal server error.'})
    }
}

module.exports ={
    createContact,
    updateContact,
    deleteContact,
    getAllContact
}
