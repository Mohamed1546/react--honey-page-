import React from 'react'
import Header from '../comp/header'
import Footer from '../comp/footer'


export default function Callus() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-12">
        <h4>whats app</h4><h1 style={{color:"white"}}>01011953866</h1>
        </div>
        <div className="col-12">
          <a href="https://www.facebook.com/profile.php?id=100064564099552">
          <h4 style={{color:"white"}}> Face book </h4>
          </a>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}
