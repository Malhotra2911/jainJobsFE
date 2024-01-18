import React from 'react'
import './Payment.css'


export function PaymentTemplate() {
  return (
   <>
             <div className='payment-div'>
                 <button className='btn1'>Download</button>
                 <button className='btn2'>Print</button>
             </div>
                    <h1 className='payment-heading'>FMN.com</h1>
             <section className='payment-Section'>
                   <div className='payment-sec'>
                         <h1>Afroj Alam</h1>
                         <h1>150-600-200, Florida USA</h1>
                   </div>
                   <div className='payment-sec1'>
                      <h1>Invoice-#0999</h1>
                      <h1>January 10th 2022</h1>
                   </div>
             </section>
             <section className='payment-section1'>
                 <h1 className='h11'>Items</h1>
                 <h1 className='h22'>Product ID</h1>
                 <h1 className='h33'>Quantity</h1>
                 <h1 className='h44'>Sub Total</h1>
             </section>
             <section className='payment-section2'>
                 <h1 className='h11'>Wordpress Template <br/><h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2></h1>
               
                 <h1 className='h22'>#05000981</h1>
                 <h1 className='h33'>9</h1>
                 <h1 className='h44'>$5000.00</h1>
             </section>
             <section className='payment-section2'>
                 <h1 className='h11'>Maxwell Adim Template <br/><h2>Lorem ipsum dolor sit amet consectetur</h2></h1>
                 <h1 className='h22'>#05000126</h1>
                 <h1 className='h33'>5</h1>
                 <h1 className='h44'>$1000.00</h1>
             </section>
             <section className='payment-section2'>
                 <h1 className='h11'>Unify Adim Template <br/><h2>Lorem ipsum dolor sit amet consectetur, adipisicing</h2></h1>
                 <h1 className='h22'>#05000821</h1>
                 <h1 className='h33'>6</h1>
                 <h1 className='h44'>$49.99</h1>
             </section>
             <section className='payment-section3'>
                 <h1 className='h11'>Total</h1>
                 <h1>SubTotal Shipping & Handling Tax <br/> <h2>Grand Total</h2></h1>
                 <h1 className='h44'>$5000.00 <br/>$100.00 <br/>$49.00 <br/><h2>$5150.99</h2></h1>
             </section>
             <section className='payment-section4'>
                 <h1>Thank you for your Business</h1>
                 
             </section>

   </>
    
  )
}


