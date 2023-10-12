import axios from "axios"

const url = "http://localhost:8989/api"

export const RegisterUser = async(data:any)=>{
    try {

        const config:any = {
            "content-type":"multipart/form-data"
        }

       return await axios.post(`${url}/register`,data,config).then((res:any)=>{
           console.log(res)
        return res.data.data
       })
    } catch (error) {
        console.log(error)
    }
}

export const SignUserIn = async(data:any)=>{
try {
    return await axios.post(`${url}/signin`,data).then((res)=>{
        return res.data.data
    })
} catch (error) {
    console.log(error)
}
}