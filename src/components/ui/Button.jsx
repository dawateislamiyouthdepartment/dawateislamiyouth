import React from 'react';

const Button = ({ children, variant = "primary", onClick, className = "" }) => {
    const variants = {
        primary: "bg-emerald-600 text-white hover:bg-emerald-700",
        secondary: "bg-indigo-900 text-white hover:bg-indigo-800",
        outline: "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50",
        ghost: "text-gray-600 hover:bg-gray-100"
    };
    return (
        <button onClick={onClick} className={`px-6 py-2.5 rounded-full font-semibold transition-all flex items-center justify-center gap-2 ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
