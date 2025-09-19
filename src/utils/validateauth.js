export const validateAuth = (email, password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!isEmailValid) {
        return 'Invalid email'
    }
    if(!isPasswordValid) {
        return 'Invalid password'
    }
    return isEmailValid && isPasswordValid
}