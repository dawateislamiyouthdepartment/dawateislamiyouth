import React from 'react';

const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow ${className}`}>
        {children}
    </div>
);

export default Card;
