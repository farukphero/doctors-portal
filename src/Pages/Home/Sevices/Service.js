import React from 'react';

const Service = ({service}) => {
    const {name, description, img } = service
    return (
        <div className={`card shadow-xl`}>
        <figure><img src= {img} alt=""/></figure>
        <div className="card-body">
          <h2 className="text-xl font-semibold text-center">{name}</h2>
          <p> {description}</p>
        </div>
      </div>
    );
};

export default Service;