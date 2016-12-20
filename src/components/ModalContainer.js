import React from 'react'

function getModal(search) {
    switch (search) {
        case '#modal-a':
            return <div>Modal A</div>
        case '#modal-b':
            return <div>Modal B</div>
        default:
            return null
    }
}

export default props => {
    return <div>
        {props.children}
        {getModal(props.location.hash)}
    </div>
}