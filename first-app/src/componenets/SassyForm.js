import React, { useState } from "react";

function FoodOrderForm() {
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [address, setAddress] = useState("");
   const [order, setOrder] = useState("");

   const handleSubmit = ($event) => {
      event.preventDefault();
      alert(`
      Order Successful!
      \n\n
      Your order was: ${order}
      \n\n
      Please show your confirmation number for pickup.
    `);
   };

   return (
      <form onSubmit={handleSubmit}>
         <label htmlFor="name">Name:</label>
         <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
         />
         <br />
         <br />

         <label htmlFor="phone">Phone:</label>
         <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
         />
         <br />
         <br />

         <label htmlFor="address">Address:</label>
         <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={({ target }) => setAddress(target.value)}
         />
         <br />
         <br />

         <label htmlFor="order">Order:</label>
         <input
            type="text"
            id="order"
            name="order"
            value={order}
            onChange={({ target }) => setOrder(target.value)}
         />
         <br />
         <br />

         <button type="submit">Submit Order</button>
      </form>
   );
}

export default FoodOrderForm;