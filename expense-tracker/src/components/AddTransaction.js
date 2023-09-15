import React, { useState } from 'react'

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    return (
        <div>
            <h3>Add new Transaction</h3>
            <form >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        placeholder='Enter Amount'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="text">Amount</label>
                    <input
                        type="text"
                        placeholder='Enter Amount'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <div className="btn">Add transaction</div>
                </div>
            </form>


        </div>
    )
}

export default AddTransaction