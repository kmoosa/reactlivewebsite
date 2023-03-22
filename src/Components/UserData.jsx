import React from 'react'

const UserData = ({user}) => {
  return (
    <>
    {
        user.map((currentUser)=>{
            const{userid,username,country}=currentUser;
            return(
                <tr>
                    <td>{userid}</td>
                    <td>{username}</td>
                    <td>{country}</td>
                </tr>
            )
        })
    }
      
    </>
  )
}

export default UserData
