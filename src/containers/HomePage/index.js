import React, { useState, useEffect } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import LocationTable from './../../components/LocationTable';
import AddLocationButton from './../../components/AddLocationButton';
import AddLocationModal from './../../components/AddLocationModal';
import LocationTimingModal from './../../components/LocationTimingModal';
import './index.css';

export default function HomePage(props) {
  const { getAll, add, update, deleteRecord } = useIndexedDB('location');
  const [loading, setLoading] = useState(false);
  const [locationList, setLocationList] = useState([]);
  const [addLocationModal, setAddLocationModal] = useState(false);
  const [locationTimingModal, setLocationTimingModal] = useState(false);
 
  useEffect(() => {
    getAllLocations();
  }, []);

  const getAllLocations = () => {
    setLoading(true);
    getAll().then(locationListDB => {
      setLoading(false);
      setLocationList(locationListDB);
    });
  }

  const addLocation = loc => {
    const id = parseInt(locationList[locationList.length-1].id)+1;
    add({ ...loc, id }).then(() => getAllLocations());
  }

  const editLocation = loc => {
    update({ ...loc }).then(() => getAllLocations());
  }

  const deleteLocation = id => {
    deleteRecord(id).then(() => getAllLocations());
  }

  return (<div className='page-container'>
    <div className='page-header'>
      <div className='header-left'>
        Location
      </div>
      <div className='header-right'>
        <AddLocationButton
          className="add-location-button"
          onClick={() => setAddLocationModal(true)}
        >
          + Add Location
        </AddLocationButton>
      </div>
    </div>
    <div className='page-table'>
      <LocationTable
        dataSource={locationList}
        loading={loading}
        currentPage={1}
        totalPages={2}
        recordsPerPage={10}
        onChange={() => {}}
        editLocation={editLocation}
        deleteLocation={deleteLocation}
        startPage={() => {}}
        previousPage={() => {}}
        nextPage={() => {}}
        lastPage={() => {}}
      />
    </div>
    <AddLocationModal
      visible={addLocationModal}
      saveLocation={addLocation}
      closeModal={() => setAddLocationModal(false)}
    />
    <LocationTimingModal 
      visible={locationTimingModal}
      saveLocation={() => {}}
      closeModal={() => setLocationTimingModal(false)}
    />
  </div>);
}
