import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
const NotFound = () => {
    //auto redirecting user to home page 
    const  Router =useRouter()
    useEffect(() => {
       setTimeout(()=>{
         Router.push('/')
       },3000) 
        
    }, [])
    return ( 
        <div className="notfound">
            <h1>oooooops!....</h1>

             <h2> page Not Found</h2>
            
             
        </div>
     );
}
 
export default NotFound;