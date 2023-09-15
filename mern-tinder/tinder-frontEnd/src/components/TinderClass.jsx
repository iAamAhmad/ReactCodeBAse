/* eslint-disable array-callback-return */
import React, { useState } from 'react'
import '../styles/TinderCards.css'
import TinderCard from 'react-tinder-card';

const TinderClass = () => {
    const [people, setPeople] = useState([
        {
            name: 'John Wick',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg'
        },
        {
            name: 'John Wick',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg'
        },
    ]);
    const swiped = (direction, nameToDelete) => {
        console.log('You swiped: ' + nameToDelete)
    }
    const outOfFrame = (name) => {
        console.log(name + 'left the screen');
    }

    return (
        <div className="tinderCard">
            <div className="tinderCard__reactTinderCard">
                {
                    people.map((person) => (
                        <TinderCard
                            className='swipe'
                            key={person.name}
                            preventSwipe={['up', 'down']}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div className="card" style={{ backgroundImage: `url(${person.url})` }}>
                                <h3>{person.name}</h3>
                            </div>

                        </TinderCard>
                    ))
                }
            </div>
        </div>
    )
}

export default TinderClass