import { useEffect } from "react"

const dynamicTitle = (title) =>{
    useEffect(()=>{
        document.title = `${title}  - Toy House=`
    },[title])
}
export default dynamicTitle