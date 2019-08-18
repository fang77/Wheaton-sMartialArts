import React from 'react';
import PropTypes from 'prop-types';
import './square.css';

const square = ({property}) => {
    const picture = property.picture;
    const index = property.index;
    return(
        <div className="card" id={`card-${index}`}> 
            <img src={picture}  alt=''/>
        </div>
    )
}

square.propTypes = {
    property: PropTypes.object.isRequired
}

export default square;