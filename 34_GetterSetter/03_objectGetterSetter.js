const user={
    _email:'manihs@gmail.com',
    _password:'Abcde',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}
// set get properties
const tea= Object.create(user)
console.log(tea.email)