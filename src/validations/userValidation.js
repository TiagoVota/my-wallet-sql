import joi from 'joi'


const validateLogin = joi.object({
	email: joi.string().email({ tlds: {allow: false} }),
	password: joi.string().min(3).max(42).required()
}).length(2)

const validateSignUp = joi.object({
	name: joi.string().min(3).max(42).required(),
	email: joi.string().email({ tlds: {allow: false} }),
	password: joi.string().min(3).max(42).required(),
	repeatPassword: joi.ref('password')
}).length(4)


export {
	validateSignUp,
	validateLogin,
}
