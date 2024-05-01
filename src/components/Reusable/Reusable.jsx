import React from 'react';

const DynamicPage = ({ data }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p>{data.description}</p>
            <a href={data.link} target="_blank" rel="noopener noreferrer">Learn more</a>
        </div>
    );
};

export default DynamicPage;
