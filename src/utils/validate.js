//WE WILL PUT ALL OF THE VALIDATION LOGIC HERE


export const checkValidData = (email, password)=>{
    //we imported this statement from regex (google it)
    //it is used for validating emails
    const isEmailValid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    //this statement will return true of false
    const ispasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email ID is invalid";
    if(!ispasswordvalid) return "Password is invalid"

    return null;
}