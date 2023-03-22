import React, { useState ,useEffect} from 'react'
import { Table } from 'react-bootstrap'
import UserData from './UserData';
const API= "https://89f8a373-a2d6-4448-bafe-83cb47460171.mock.pstmn.io/users"

const TableC = () => {
    const [user,setUser]=useState([]);
    const fetchUser=async(url)=>{
        try{
            const res =await fetch(url);
            const data =await res.json();
            if(data.length>0){
                setUser(data);
            }
            console.log(data);
        }catch(e){
            console.error(e)
        }
    }

    useEffect(()=>{
        fetchUser(API);
      },[]);

  return (
    <>

<Table striped bordered hover>
<thead>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
        </thead>
        <tbody>
            <UserData user={user}/>
        </tbody>
    </Table>
  
    
    </>
  )
}

export default TableC
