import React from 'react'

const CardStatusItem = ({title, idx,endLeft, endRight, onMoveItem}) => {
    
    const returnLeftButtonStyles = ()=>{
        return `ActionButtons LeftButton ${(endLeft ? "disabled": "")}`;
    }
    const returnRightButtonStyles = ()=>{
        return `ActionButtons RightButton ${(endRight ? "disabled":"")}`;
    }

    const handleMoveLeft = () => {
        if(endLeft) return;
        onMoveItem({title, idx,move:'left'});
    };

    const handleMoveRight = () => {
        if(endRight) return;
        onMoveItem({title, idx,move:'right'});
    };
    return (
        <div className="CardStatusItem">
           <button className={returnLeftButtonStyles()} onClick={handleMoveLeft}>&lt;&lt;</button> 
            <div>{title}</div>
            <button className={returnRightButtonStyles()} onClick={handleMoveRight}>&gt;&gt;</button>
        </div>
    )
};

export default CardStatusItem;