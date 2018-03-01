import React from 'react';

const initialProps = {
  title: 'Hello my dear friend!',
  name: 'Anonymous',
};

const newProps = {
  additionalInfo: 'extended by extender function',
};

const extender = (newProps, InitialComponent) => {
  return () => (<InitialComponent/>)
};

const InitialComponent = ({title, name}) => (
  <div>
    <h2>{title}</h2>
    <p>{name}</p>
  </div>
);

const ExtendedComponent = extender(newProps, InitialComponent);

const HOC = () => (
  <div>
    <h1>
      High Order Component
    </h1>
    <ExtendedComponent {...initialProps}/>
  </div>
);

export default HOC;
