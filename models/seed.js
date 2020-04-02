const User = require('./UserModel')


const newUser = [
    {
        name:'Cameron Lumpkin',
        city: 'Atlanta',
        state: 'GA',
        email: 'Cameronlumpkin@email.com',
        accountBalance: 0,
    },

    {
        name: 'Buggs Bunny',
        city: 'Austin',
        state: 'Texas',
        email: 'bbunny',
        accountBalance: 0,

    }
];


User.deleteMany().then(()=>{
    return User.create(newUser);
}).then(()=>{
    console.log('database seeded')
})
