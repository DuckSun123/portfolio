import React from 'react';
import './index.less';

const Card = ({ item, onClick }) => {
    return (
        <div className="card">
            <div className="content">
                <h2>0{item.key}</h2>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <a  onClick={() => onClick(item.key)}>Read More</a>
            </div>
        </div>
    );
}

export default Card;
