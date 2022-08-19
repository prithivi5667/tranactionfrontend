import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
const [details,setnewdata]=useState([])
useEffect(() => {
  axios.get('http://localhost:8000/api/details').then(res=>{
    setnewdata(res.data)
  }).catch(err=>{
    console.log(err)
  })
},[])



console.log(details)
    console.log(props);
    const userData = props.user ? 
    (<div>
      <h3>Please <Link className='btn btn-primary' to="/add">Adddetails</Link> to view this page</h3>
        <div>

        <h1>Profile</h1>
        <p><strong>Name:</strong> {props.user.name}</p> 
        <p><strong>Email:</strong> {props.user.email}</p> 
        <p><strong>ID:</strong> {props.user.id}</p> 
        </div>
        <div>

        <table class="table">
  <thead className="thead-dark">
    <tr className="table-primary">
      <th scope="col">TransactionId</th>
      <th scope="col">CardNumber</th>
      <th scope="col">TxnAmount</th>
      <th scope="col">Txn Response</th>
      <th scope="col">Txn initiated</th>
      <th scope="col">Txn end time</th>
    </tr>
  </thead >
  <tbody>
    {details.map((data,index)=>
    
    <tr>
      
      <td>{data.TransactionId}</td>
      <td>{data.CardNumber}</td>
      <td>{data.TxnAmount}</td>
      <td>{data.TxnResponse}Success</td>
      <td>{data.date}</td>
      <td>{data.recivedTime}</td>
    </tr>
    
    )}
  </tbody>
</table>
        </div>
    </div>
    
    
    
    ) : <h4>Loading...</h4>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div>
            { props.user ? userData : errorDiv() }
        </div>
    );

}

export default Profile;