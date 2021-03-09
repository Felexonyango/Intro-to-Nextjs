import Head from  'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import {Fragment} from 'react'
const Home=()=> {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>

   <div > 
     <h1 className={styles.title}>Home page</h1>
     
    <p className={styles.text}>hello am felix software developer .I love javascript , i play around wit typescript and graphql</p>


</div>  
  
</Fragment>

  );
<Footer/>

}
export default Home;