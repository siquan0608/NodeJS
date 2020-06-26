let _firstModule = require('./hello');
let R1=_firstModule.R1;
//R1.HelloWordl();

let Person ={
    firstName:'Quan',
    lastname:'Phan Si',
    age:18,
    address:{
        num:'28 Huynh Van Nghe',
        country:'Viet Nam'
    },
    sayHello:function () {
        console.log('Say hello!!');
    }
}
Person.sayHello();