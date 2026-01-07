// Synchronous

const getUserSync = (id) => {
    const nama = id === 1 ? 'Aiden' : 'Pearce';

    // let nama = '';

    // if (id === 1) {
    //     nama = 'Aiden';

    // } else {
    //     nama = 'Pearce';
    // }

    return { id, nama };

    // return { id: id, nama: nama};
}
// const getUserSync = require('./src/getUserSync');
const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = 'Halo Dunia';
console.log(halo);


//Asynchronous
const getUser = (id, callback) => {
    const time = id === 1 ? 3000 : 2000;

    setTimeout(() => {
        const nama = id === 1 ? 'Aiden' : 'Pearce';

        callback({ id, nama });

    }, time);
}

// const getUser = require('./src/getUser');
const userTiga = getUser(1, (hasil) => {
    console.log(hasil);
});

const userEmpat = getUser(2, (hasil) => {
    console.log(hasil);
});

const hello = 'Hello World';
console.log(hello);