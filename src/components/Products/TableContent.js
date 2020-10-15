import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

const products =[
  {
    number: 1003 ,
    name: "Green pencil",
    date: "2020-10-10" ,
    sku: 229 ,
    weight: "0.02kg",
    height: "20cm",
    width: "2cm",
    origin: "Singapore",
    minimum: 100,
    delay: "30 days",
  },
  {
    number: 1004 ,
    name: "Red pencil",
    date: "2020-10-10" ,
    sku: 243 ,
    weight: "0.02kg",
    height: "20cm",
    width: "2cm",
    origin: "Singapore",
    minimum: 100,
    delay: "30 days",
  },
  {
    number: 4673 ,
    name: "Ruler",
    date: "2020-10-20" ,
    sku: 331 ,
    weight: "0.03kg",
    height: "30cm",
    width: "3cm",
    origin: "China",
    minimum: 50,
    delay: "30 days",
  },
  {
    number: 4033 ,
    name: "Notepad",
    date: "2020-03-11" ,
    sku: 211 ,
    weight: "0.04kg",
    height: "30cm",
    width: "12cm",
    origin: "China",
    minimum: 70,
    delay: "20 days",
  },
  {
    number: 2212 ,
    name: "Big Calendar",
    date: "2020-12-16" ,
    sku: 322 ,
    weight: "0.04kg",
    height: "50cm",
    width: "70cm",
    origin: "Taiwan",
    minimum: 100,
    delay: "10 days",
  },
  {
    number: 2214 ,
    name: "Small Calendar",
    date: "2020-12-17" ,
    sku: 322 ,
    weight: "0.04kg",
    height: "40cm",
    width: "50cm",
    origin: "Taiwan",
    minimum: 100,
    delay: "12 days"
  }
];

const TableContent = () => {
 
  const renderProducts = (products, index) => {

    return(
      <tr key={index}>
        <td>{products.number}</td>
        <td>{products.name}</td>
        <td>{products.date}</td>
      </tr>
    )
  }
  
  return(
    <ReactBootStrap.Table striped bordered hover>
      <thead>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
          {products.map(renderProducts)}
      </tbody>
    </ReactBootStrap.Table>
  )
}

export default TableContent;