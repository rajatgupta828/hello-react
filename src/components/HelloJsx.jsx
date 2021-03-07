// Sample JSX element

import React from 'react';

const HelloJsx = () => {
    return React.createElement('div',
    {id: "HelloJsx id" , className: "Hello Jsx Class"},
    React.createElement('h3',null,"Hello from HelloJsx"));
}

export default HelloJsx