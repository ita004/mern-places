import React from 'react'

import PlaceItem from './PlaceItem'
import './PlaceList.css'
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'

function PlaceList(props) {

    if (props.item.length === 0) {
        return (
            <div className='place-list center'>
                <Card>
                    <h2>No Places found!! Create One</h2>
                    <Button to='/places/new'>Share place</Button>
                </Card>
            </div>
        )
    }

    return( 
    <ul className='place-list'>
        {props.item.map(place => (
            <PlaceItem
                key={place.id}
                id={place.id}
                image={place.image}
                title={place.title}
                description={place.description}
                address={place.address}
                creatorId={place.creator}
                coordinates={place.location}
                onDelete={props.onDeletePlace}
            />
        ))}
    </ul>
    )
}

export default PlaceList