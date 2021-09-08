
import React from 'react'
import CardStatusItem from './CardStatusItem';

const CardStatus = ({title, tasks, endLeft, endRight, onMove}) => {
    const handleOnMoveItem = (movement) =>{
        onMove(movement);
    };
    return (
        <div className="CardStatus">
            <h3>{title}</h3>
            {tasks.map((item, idx) => 
                 <CardStatusItem 
                    idx={idx}
                    key={item} 
                    title={item}
                    endLeft={endLeft} 
                    endRight={endRight}
                    onMoveItem={handleOnMoveItem}
                />
                )
            }
        </div>
    );
};


export default CardStatus;