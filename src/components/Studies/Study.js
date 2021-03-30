import React from 'react';

export default function Study({study}) {
    
    const { school, grade, leraned, logo, begin, end } = study;
    
    return (
        <div>

            <img src={logo} />
            {school}
            {grade}
            
        </div>
    )
}
