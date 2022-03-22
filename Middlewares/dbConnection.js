import  mongoose  from "mongoose";
const connectdb= async() =>{
    try {
        await mongoose.connect(process.env.LOCAL_DB ,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("db connected sucessfully");
    } catch (error) {
        console.log(error);
    }   
}
export default connectdb;