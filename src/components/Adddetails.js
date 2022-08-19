import React, { useState } from 'react'
import axios from 'axios'
function Adddetails() {
  const [TransactionId ,setid]=useState('')
  const [CardNumber ,setcard]=useState('')
  const [TxnAmount,setamount]=useState('')
  const addpost=()=>{
      const post={
        TransactionId:TransactionId,
          CardNumber:CardNumber,
          TxnAmount:TxnAmount,
        
      }
  axios.post('http://localhost:8000/api/details/add',post).then(res=>{
      alert("Post sucessfully added")
  }).catch(err=>{
      console.log(err)
  })

  }
  return (

<div className='row justify-content-center'>
        <div className='col-md-8'>
            <div>
            <div className="form-group">
            <label >TransactionId</label>
                <input className='form-control' type='text' placeholder='TransactionId' value={TransactionId} onChange={(e)=>setid(e.target.value)} />
                </div>
                <div className="form-group">
                   <label >CardNumber</label>

                <input className='form-control' type='text' placeholder='CardNumber'value={CardNumber} onChange={(e)=>setcard(e.target.value)} />
                </div>
                <div className="form-group">
                    <label >TxnAmount</label>

               <input type="text" className="form-control"  placeholder="TxnAmount" value={TxnAmount} onChange={(e)=>setamount(e.target.value)}/>
                </div>
                <button className='btn btn-primary'onClick={addpost} >Add</button>
            </div>
        </div>
    </div>

  )
}

export default Adddetails