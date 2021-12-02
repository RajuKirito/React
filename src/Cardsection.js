import React from 'react'
import Card from "./Card"
const CardSection = () => {
    return(<section className="contact bg-success ">
    <div className="container ">
      <h2 className="text-white">
        We love new friends!
      </h2>
      <div className="row">
        <div className="col-4">
          <Card title = "Something" buttonText = "my button" url = "https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        </div>
        <div className="col-4">
          <Card url = "https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title = 'something 2' button = 'button 2'/>
        </div>
        <div className="col-4">
          <Card url = "https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title = 'some 3' button = '3'/>
        </div>
      </div>
    </div>
  </section>)
}

export default CardSection;