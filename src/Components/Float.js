import React, { useState } from 'react'
import "./Float.css"

const Float = () => {
    const [box1Numbers, setBox1Numbers] = useState([1, 2, 3, 4])
    const [box2Numbers, setBox2Numbers] = useState([])

    const moveToBox2 = (item) => {
        setBox1Numbers(box1Numbers.filter((num) => num !== item))
        setBox2Numbers([...box2Numbers, item])
    }
    const moveToBox1 = (item) => {
        setBox2Numbers(box2Numbers.filter((num) => num !== item))
        setBox1Numbers([...box1Numbers, item])
    }
    return (
        <>
            <h1 className='hed-1'>Float Balls one box to another...</h1>
            <div className='both-container'>
                <div className='box1-container'>
                    {box1Numbers.map((item, index) => <tr key={index} onClick={() => moveToBox2(item)}>
                        <td className='item-box'>{item}</td>
                    </tr>)}
                </div>
                <div className='box2-container'>
                    {box2Numbers.map((item, index) => <tr key={index} onClick={() => moveToBox1(item)}>
                        <td className='float-box'>{item}</td>
                    </tr>)}
                </div>
            </div>
        </>
    );
}

export default Float;

