import React from 'react'

const Packet = props => {
    const styling = {
        borderWidth: '0px',
        marginBottom: props.marginBottom || '0px'
    }
    return ( 
        <div style={styling}>
            {props.children}
        </div>
    )
}
export default Packet