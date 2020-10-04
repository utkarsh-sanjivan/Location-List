import React, { useState, useEffect } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import LocationTable from './../../components/LocationTable';
import AddLocationButton from './../../components/AddLocationButton';
import AddLocationModal from './../../components/AddLocationModal';
import LocationTimingModal from './../../components/LocationTimingModal';
import moment from 'moment'; 
import { DAY_LIST } from './../../utils/constant';
import './index.css';

export default function HomePage(props) {
  const { getAll, add, update, deleteRecord } = useIndexedDB('location');
  const [loading, setLoading] = useState(false);
  const [locationList, setLocationList] = useState([]);
  const [viewlocationList, setViewLocationList] = useState([]);
  const [facilityTiming, setFacilityTiming] = useState(DAY_LIST);
  const [currentLocation, setCurrentLocation] = useState({});
  const [addLocationModal, setAddLocationModal] = useState(false);
  const [locationTimingModal, setLocationTimingModal] = useState(false);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
 
  useEffect(() => {
    getAllLocations();
  }, []);

  const getAllLocations = () => {
    setLoading(true);
    getAll().then(locationListDB => {
      const tempLocationListDB = locationListDB.map(location => { 
        return { 
          ...location, 
          facility: JSON.parse(location.facility).map(facility => { 
            return { 
              ...facility,
              to: moment(facility.to),
              from: moment(facility.from)
            }
          })
        } 
      });
      setLoading(false);
      setLocationList(tempLocationListDB);
      setViewLocationList(tempLocationListDB.slice(10*(currentPage-1), 10*currentPage));
      setTotalPage(Math.ceil(locationListDB.length/recordsPerPage));
    });
  }

  const addLocation = loc => {
    loc.facility = JSON.stringify(loc.facility);
    const id = locationList.length>0? parseInt(locationList[locationList.length-1].id)+1: 1;
    add({ ...loc, id }).then(() => {
      getAllLocations();
      setAddLocationModal(false);
      setFacilityTiming(DAY_LIST);
    });
  }

  const updateLocation = loc => {
    loc.facility = JSON.stringify(loc.facility);
    setCurrentLocation({});
    update({ ...loc }).then(() => {
      getAllLocations();
      setAddLocationModal(false);
    });
  }

  const deleteLocation = id => {
    deleteRecord(id).then(() => getAllLocations());
  }

  const handleEditLocation = loc => {
    setFacilityTiming(loc.facility);
    setCurrentLocation(loc);
    setAddLocationModal(true);
  }

  const handleRecordsPerPageChange = records => {
    setRecordsPerPage(records);
    setCurrentPage(1);
    setViewLocationList(locationList.slice(0, records));
    setTotalPage(Math.ceil(locationList.length/records));
  }

  const handleMovePage = type => {
    switch(type) {
      case 'startPage':
        setViewLocationList(locationList.slice(0, recordsPerPage));
        setCurrentPage(1);
        break;

      case 'previousPage':
        if (currentPage>1) {
          setViewLocationList(locationList.slice(recordsPerPage*(currentPage-2), recordsPerPage*(currentPage-1)));
          setCurrentPage(currentPage-1);
        }
        break;

      case 'nextPage':
        if (currentPage<totalPage) {
          setViewLocationList(locationList.slice(recordsPerPage*(currentPage), recordsPerPage*(currentPage+1)));
          setCurrentPage(currentPage+1);
        }
        break;

      case 'lastPage':
        setViewLocationList(locationList.slice(recordsPerPage*(totalPage-1), recordsPerPage*totalPage));
        setCurrentPage(totalPage);
        break;

      default: 
        break;
    }
  }

  const handleFacility = () => {
    setAddLocationModal(false);
    setLocationTimingModal(true);
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
        dataSource={viewlocationList}
        loading={loading}
        currentPage={currentPage}
        totalPages={totalPage}
        recordsPerPage={recordsPerPage}
        changeRecordsPerPage={handleRecordsPerPageChange}
        editLocation={handleEditLocation}
        deleteLocation={deleteLocation}
        startPage={() => handleMovePage('startPage')}
        previousPage={() => handleMovePage('previousPage')}
        nextPage={() => handleMovePage('nextPage')}
        lastPage={() => handleMovePage('lastPage')}
      />
    </div>
    <AddLocationModal
      currentLocation={currentLocation}
      visible={addLocationModal}
      saveLocation={addLocation}
      updateLocation={updateLocation}
      handleFacility={() => handleFacility()}
      closeModal={() =>{ 
        setCurrentLocation({});
        setFacilityTiming(DAY_LIST);
        setAddLocationModal(false)
      }}
    />
    <LocationTimingModal 
      facilityTiming={facilityTiming}
      visible={locationTimingModal}
      setFacilityTiming={setFacilityTiming}
      saveLocationTiming={() => {
        setFacilityTiming(DAY_LIST);
        setAddLocationModal(true);
        setLocationTimingModal(false);
      }}
      closeModal={() => {
        setAddLocationModal(true);
        setLocationTimingModal(false);
        setFacilityTiming(DAY_LIST);
      }}
    />
  </div>);
}
