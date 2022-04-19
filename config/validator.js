const yup = require("yup");

function validate(date) {
const userschema = yup.object().shape({
    username:yup.string().required().required("this can't be null").min(3).max(20),
    email:yup.string().email().cast.required("email can't be null").min(3).max(50),
    password:yup.string().required("password can't be null").min(8).max(20),

});

return userschema.validate(date);
}

module.exports = validate;