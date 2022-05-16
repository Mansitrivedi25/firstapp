import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
//import { Accordion, AccordionActions, AccordionDetails } from '@mui/material';
import React, { useEffect, useState } from 'react';
import app_config from '../config';

const ManageUser = () => {

    const url=app_config.backend_url;

    const[userList,setUserList]=useState([]);
    const[loading,setLoading]=useState(true);
    const fetchUserData=()=>{//function for fetching data
        fetch(url+"/user/getall")

        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            setUserList(data);
            setLoading(false);
        });
    };
    const displayUserData=()=>{
        if(!loading){
            return userList.map(({age,createdAt,username,password,email})=>(
            
        <Accordion>
           <AccordionSummary expandIcon={<ExpandMore/>}>
                {username}
               </AccordionSummary> 
               <AccordionDetails>
               <h5>Age : {age}</h5>
            <h5>Password : {password}</h5>
            <h5>Email : {email}</h5>
            <h5>Added On : {createdAt}</h5>   
               </AccordionDetails>
        </Accordion>
            ));
        }
    };
    useEffect(() => {           //18april hook
          fetchUserData();
        }, []);

  return (
    <div><h1>Manage user</h1>
    <hr/>
    {displayUserData()}
    </div>
    );
};

export default ManageUser;