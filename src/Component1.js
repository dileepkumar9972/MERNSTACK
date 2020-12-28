import React from 'react'

function Component1(props) {

    return (
        <div className="component1">
                <input type="text" onChange={props.changed}/>
                <span style={{color: "red"}}>{props.message}</span>
        </div>
    )
}

export default Component1
