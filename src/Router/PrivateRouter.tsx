import { PropsWithChildren } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PrivateRouter:React.FC<PropsWithChildren> = ({children}) => {

    const user:any = useSelector((state:any)=>{
        state.user
    })
  return (
    <div>
        {
            user? <div>{children}</div> : <Navigate to="/register"/>
        }
    </div>
  )
}

export default PrivateRouter