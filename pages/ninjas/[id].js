//use getStaticPaths to fetch each item id on the ninja list
export const getStaticPaths =async()=>{
const  res =await fetch('https://jsonplaceholder.typicode.com/users');
const data =res.json();
const paths = data.map((ninja)=>`/ninjas/${ninja.id}`)
return {
    paths,
    fallback:false  
}
 }
 //get item of individual ninja  use getStaticProps
 export const  getStaticProps=async(context)=>{
const  id =context.params.id;
const res =await fetch('https://jsonplaceholder.typicode.com/users' + `${id}`);
const data =await res.json();
return{
    props:{
        ninja:data
    }
}

 }
const Details = ({ninja}) => {
    return ( 
    <div>
        <h1>{ninja.name}</h1>
        <p>{ninja.email}</p>
        <p>{ninja.website}</p>
        <p>{ninja.address.city}</p>
    </div> 
    );
}
 
export default Details;