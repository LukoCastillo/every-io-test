
import React from 'react'
import CardStatusItem from './CardStatusItem';

type Props ={
    title: string,
    tasks: any,
    endLeft: boolean,
    endRight: boolean,
    onMove: any
};

const CardStatus = ({title, tasks, endLeft, endRight, onMove}:Props) => {
    const handleOnMoveItem = (movement: any) =>{
        onMove(movement);
    };
    return (
        <div className="CardStatus">
            <h3>{title}</h3>
            {tasks.map((item : any, idx: number) => 
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