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
  const [sortObj, setSortObj] = useState({});

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
      setCurrentLocation({});
      setFacilityTiming(DAY_LIST);
    });
  }

  const updateLocation = loc => {
    loc.facility = JSON.stringify(loc.facility);
    setCurrentLocation({});
    update({ ...loc }).then(() => {
      getAllLocations();
      setAddLocationModal(false);
      setCurrentLocation({});
      setFacilityTiming(DAY_LIST);
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

  const sortTable = type => {
    switch(type) {
      case 'name':
        const sortOrderName = sortObj.hasOwnProperty('name')? !sortObj.name: true;
        locationList.sort((fEl, sEl) => {
          let nameA = fEl.name.toUpperCase();
          let nameB = sEl.name.toUpperCase();
          if (nameA < nameB) return sortOrderName? -1: 1;
          if (nameA > nameB) return sortOrderName? 1: -1;
          return 0;
        })
        setViewLocationList(locationList.slice(recordsPerPage*(currentPage-1), recordsPerPage*currentPage));
        setSortObj({ name: sortOrderName });
        break;

      case 'address':
        const sortOrderAddress = sortObj.hasOwnProperty('address')? !sortObj.address: true;
        locationList.sort((fEl, sEl) => {
          let addressA = fEl.addressLine1? fEl.addressLine1.toUpperCase(): '';
          let addressB = sEl.addressLine1? sEl.addressLine1.toUpperCase(): '';
          if (addressA < addressB) return sortOrderAddress? -1: 1;
          if (addressA > addressB) return sortOrderAddress? 1: -1;
          return 0;
        })
        setViewLocationList(locationList.slice(recordsPerPage*(currentPage-1), recordsPerPage*currentPage));
        setSortObj({ address: sortOrderAddress });
        break;

      case 'phoneNo':
        const sortOrderPhoneNumber = sortObj.hasOwnProperty('phoneNo')? !sortObj.phoneNo: true;
        locationList.sort((fEl, sEl) => {
          let phoneNoA = fEl.phoneNumberValue;
          let phoneNoB = sEl.phoneNumberValue;
          if (phoneNoA < phoneNoB) return sortOrderPhoneNumber? -1: 1;
          if (phoneNoA > phoneNoB) return sortOrderPhoneNumber? 1: -1;
          return 0;
        })
        setViewLocationList(locationList.slice(recordsPerPage*(currentPage-1), recordsPerPage*currentPage));
        setSortObj({ phoneNo: sortOrderPhoneNumber });
        break;

      default:
        break;
    }
  }
  
  useEffect(getAllLocations, []);

  return (<div className='page-container'>
    <div className='page-header'>
      <div className='header-left'>
        Location
      </div>
      <div className='header-right'>
        <AddLocationButton
          className="add-location-button"
          onClick={() => {
            setCurrentLocation({});
            setFacilityTiming(DAY_LIST.map(day => { return { ...day, to: moment(), from: moment().subtract(2, 'hours'), isChecked: false } }));
            setAddLocationModal(true);
          }}
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
        sorterObject={sortObj}
        changeRecordsPerPage={handleRecordsPerPageChange}
        editLocation={handleEditLocation}
        deleteLocation={deleteLocation}
        startPage={() => handleMovePage('startPage')}
        previousPage={() => handleMovePage('previousPage')}
        nextPage={() => handleMovePage('nextPage')}
        lastPage={() => handleMovePage('lastPage')}
        sortTable={sortTable}
      />
    </div>
    <AddLocationModal
      currentLocation={currentLocation}
      facilityTiming={facilityTiming}
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
