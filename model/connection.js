import mongoose from 'mongoose'


const connect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/test').then((res) => console.log('connetc'))

}


export default connect;