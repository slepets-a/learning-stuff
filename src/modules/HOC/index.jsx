import React from 'react';

const initialProps = {
  title: 'Hello my dear friend!',
  name: 'Anonymous',
};

const newProps = {
  additionalInfo: 'extended by extender function',
};

// must return a func
const extender = (newProps) =>
  (OldComponent) => {
    const ModifiedComponent = (oldProps) => (<div>
      <OldComponent {...oldProps}/>
      <p>{newProps.additionalInfo}</p>
    </div>);

    return ModifiedComponent;
  };

const InitialComponent = ({title, name}) => (
  <div>
    <h2>{title}</h2>
    <p>{name}</p>
  </div>
);

// ExtendedComponent must be a func
const ExtendedComponent = extender(newProps)(InitialComponent);

const HOC = () => (
  <div>
    <h1>
      High Order Component
    </h1>
    <ExtendedComponent {...initialProps}/>
  </div>
);

export default HOC;
