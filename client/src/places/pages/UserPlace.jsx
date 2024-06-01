import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import {useHttpClient} from '../../shared/hooks/http-hook'

function UserPlace() {
    const [loadedPlaces, setLoadedPlaces] = useState();
    const {isLoading, sendRequest, error, clearError} = useHttpClient();   
    const userId = useParams().userId;

    useEffect(() => {
        const fetchPlaces = async () =>{
           try{
            const responseData = await sendRequest(
              import.meta.env.VITE_API + `/places/users/${userId}`
            );
            setLoadedPlaces(responseData.places);
           }catch(err){}
        }
        fetchPlaces();
    },[sendRequest, userId]);

    const placeDeletedHandler = (deletedPlaceId) => {
      setLoadedPlaces(prevPlaces => prevPlaces.filter(place => place.id !== deletedPlaceId))
    }

  return (
    <>
    <ErrorModal error={error} onClear={clearError} />
    {isLoading && (
      <div className='center'>
        <LoadingSpinner />
      </div>
    )}
    
  {!isLoading && loadedPlaces && <PlaceList item={loadedPlaces} onDeletePlace={placeDeletedHandler} />}
</>
  )
}



export default UserPlace