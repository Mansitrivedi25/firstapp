// 1. component is represented by a javascipt funtion 
// 2. funtions (components ) first letter should by uppercase 
// 3. There should be a top level return in  statement in every  
// 4. components should by exported / imported bby its name.



const Home =() =>{
     let myhobby = " coding &gaming ";

    return(
        <div>
             <h1>  Home Components  </h1>
             <h2>My Hobby is {myhobby}</h2>
             <h3> 2+2 = {2+2}</h3>
             </div>
        
        
    );
};
 export default Home ;
 