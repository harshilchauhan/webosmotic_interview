const bcrypt = require('bcrypt')

const comparePassword = async function(enterpassword,storepassword){
    try {
        return bcrypt.compare(enterpassword,storepassword)
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = comparePassword