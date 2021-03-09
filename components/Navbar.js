import Link from 'next/link'
import  Image from 'next/image'
const Navbar = () => {
    return ( 
       <nav>
            <div  className="logo">
                <Image src="/next.png" width={128} height={77}></Image>
              
         </div>
         <Link href="/">
              <a>home</a>
              
              </Link>
              <Link href="/about ">
              <a>About</a>
              
              </Link>
              <Link href="/ninjas">
              <a>ninjas</a>
              
              </Link>
       </nav>
     );
}
 
export default Navbar;