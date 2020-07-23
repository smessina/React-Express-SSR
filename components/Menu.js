import React from 'react'

const Menu = props => {
    return(
        <ul>{ props.items.map( item => <li key={item.id}>I like {item.name}</li> ) }</ul>
    )
 }

export default Menu