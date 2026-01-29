import React from 'react';

const SectionHeader = ({ title, subtitle, className = "" }) => (
    <div className={`mb-12 text-center ${className}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        {subtitle && <p className="text-gray-600 max-w-2xl mx-auto text-lg">{subtitle}</p>}
    </div>
);

export default SectionHeader;
