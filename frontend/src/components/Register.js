import React from 'react'
import '../CSS/form.css'


export default function Register() {
  return (
    <>
        <div className="container registerpage">
            <div className="container registerbox">
              <h2>Registration From</h2>
                <form action="" className='my-2'>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="" className='my-2 fw-bold'>Name</label>
                        <input type="text" className='form-control' placeholder='Your Name' />
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="" className='my-2 fw-bold'>Age</label>
                        <input type="text" className='form-control' placeholder='Age' />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="" className='my-2 fw-bold'>Age</label>
                        <input type="text" className='form-control' placeholder='Age' />
                      </div>
                    </div>
                </form>
            </div>
        </div>


    </>
  )
}
