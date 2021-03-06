import React, { useState, useEffect } from 'react';
import { Modal, Input, Select, Button, Tag } from 'antd';
import { STATE_LIST, TIMEZONE_LIST } from './../../utils/constant';
import { normalizePhoneNumber } from './../../utils/format';
import { validateName, validateZipCode } from './../../utils/validate';
import './index.css';

const { Option } = Select;

const AddLocationModal = props => {
  const [formState, setFormState] = useState({
    name: '',
    addressLine1: '',
    suiteNo: '',
    addressLine2: '',
    city: '',
    state: { code: null, name: null },
    zipCode: '',
    phoneNumber: '',
    phoneNumberValue: 0,
    timeZone: '',
    facility: [],
    appointmentList: [],
  });
  const [isNameValid, setIsNameValid] = useState(true);
  const [isZipCodeValid, setIsZipCodeValid] = useState(true);

  useEffect(() => {
    if (Object.keys(props.currentLocation).length>0) setFormState({ ...props.currentLocation, phoneNumberValue: props.currentLocation.phoneNo && props.currentLocation.phoneNo !== ''? parseInt(props.currentLocation.phoneNo.replace(/[^0-9]/g, '')): 0 })
    else setFormState({
      name: '',
      addressLine1: '',
      suiteNo: '',
      addressLine2: '',
      city: '',
      state: { code: null, name: null },
      zipCode: '',
      phoneNumber: '',
      phoneNumberValue: 0,
      timeZone: '',
      facility: [],
      appointmentList: [],
    });
  }, [props.currentLocation])

  const tagRender = props => {
    const { label, value, closable, onClose } = props;
    return (
      <Tag 
        className='tag-element'
        color={value}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    )
  }

  const getPhoneInt = val => {
    if (Number.isInteger(val)) return val;
    else if (parseInt(val)) return parseInt(val);
    else return parseInt(val.replace(/[^0-9]/g, ''));
  }

  return (
    <Modal
      {...props}
      title={
        <div className="add-location-title">{Object.keys(props.currentLocation).length===0? 'Add Location': 'Edit Location'}</div>
      }
      visible={props.visible}
      okText={Object.keys(props.currentLocation).length===0? 'Save': 'Edit'}
      onOk={() => {
        if (Object.keys(props.currentLocation).length===0) {
          setIsNameValid(validateName(formState.name));
          setIsZipCodeValid(validateZipCode(formState.zipCode));
          if(validateName(formState.name) && validateZipCode(formState.zipCode)) props.saveLocation({ ...formState, facility: props.facilityTiming });
        } else {
          setIsNameValid(validateName(formState.name));
          setIsZipCodeValid(validateZipCode(formState.zipCode));
          if(validateName(formState.name) && validateZipCode(formState.zipCode)) props.updateLocation({ ...formState, facility: props.facilityTiming });
        }
      }}
      onCancel={e => props.closeModal()}
      width={800}
    >
      <div style={{ marginBottom: '25px' }}>
        <div className='input-title-text'>Location Name</div>
        <Input
          value={formState.name}
          placeholder='Location Name'
          className='input-text'
          onChange={event => {
            setIsNameValid(validateName({ ...formState, name: event.target.value }));
            setFormState({ ...formState, name: event.target.value });
          }}
        />
        {!isNameValid? <div className='required-error-text'>** Required</div>:null}
      </div>

      <div style={{ display: 'flex', marginBottom: '25px' }}>
        <div className='input-container-left'>
          <div className='input-title-text'>Address Line 1</div>
          <Input
            value={formState.addressLine1}
            placeholder='Address Line 1'
            className='input-text'
            onChange={event => setFormState({ ...formState, addressLine1: event.target.value })}
          />
        </div>
        <div className='input-container-right'>
          <div className='input-title-text'>Suite No.</div>
          <Input
            value={formState.suiteNo}
            placeholder='Suite No.'
            className='input-text'
            onChange={event => setFormState({ ...formState, suiteNo: event.target.value})}
          />
        </div>
      </div>

      <div style={{ display: 'flex', marginBottom: '25px' }}>
        <div className='input-container-left'>
          <div className='input-title-text'>Address Line 2</div>
          <Input
            value={formState.addressLine2}
            placeholder='Address Line 2'
            className='input-text'
            onChange={event => setFormState({ ...formState, addressLine2: event.target.value })}
          />
        </div>
        <div  style={{ width: '50%', display: 'flex'}}>
          <div className='input-container-left'>
            <div className='input-title-text'>City</div>
            <Input
              value={formState.city}
              placeholder='City'
              className='input-text'
              onChange={event => setFormState({ ...formState, city: event.target.value })}
            />
          </div>
          <div className='input-container-right'>
            <div className='input-title-text'>State</div>
            <Select
              value={formState.state.name}
              placeholder='State'
              bordered={false}
              showArrow={false}
              className='input-select'
              onChange={event => {
                setFormState({ ...formState, state: STATE_LIST.find(element => element.code === event) })
              }}
            >
              {STATE_LIST.map(state => <Option key={state.code}>{state.name}</Option>)}
            </Select>
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', marginBottom: '25px' }}>
        <div  style={{ display: 'flex', width: '50%', marginRight: '10px'}}>
          <div className='input-container-left'>
            <div className='input-title-text'>Zip Code</div>
            <Input
              value={formState.zipCode}
              placeholder='Zip Code'
              className='input-text'
              onChange={event => {
                setIsZipCodeValid(validateZipCode(event.target.value));
                setFormState({ ...formState, zipCode: event.target.value });
              }}
            />
            {!isZipCodeValid? <div className='required-error-text'>** Must have 5 to 10 character</div>:null}
            {!isZipCodeValid? <div className='required-error-text'>** No spaces allowed</div>:null}
          </div>
          <div className='input-container-right'>
            <div className='input-title-text'>Phone Number</div>
            <Input
              value={formState.phoneNumber}
              placeholder='Phone Number'
              className='input-text'
              onChange={event => setFormState({ ...formState, phoneNumberValue: getPhoneInt(event.target.value), phoneNumber: event.target.value })}
              onPressEnter={event => setFormState({ ...formState, phoneNumberValue: getPhoneInt(event.target.value), phoneNumber: normalizePhoneNumber(event.target.value) })}
              onBlur={event => setFormState({ ...formState, phoneNumberValue: getPhoneInt(event.target.value), phoneNumber: normalizePhoneNumber(event.target.value) })}
            />
          </div>
        </div>
        <div className='input-container-right'>
          <div className='input-title-text'>Time Zone</div>
          <Select
            value={formState.timeZone}
            placeholder='Time Zone'
            bordered={false}
            showArrow={false}
            className='input-select'
            onChange={index => setFormState({ ...formState, timeZone: TIMEZONE_LIST[index] })}
          >
            {TIMEZONE_LIST.map((timeZone, index) => <Option key={index}>{timeZone}</Option>)}
          </Select>
        </div>
      </div>

      <div style={{ display: 'flex', marginBottom: '25px' }}>
        <div className='input-container-left'>
          <Button className='facility-button' type="text" onClick={props.handleFacility}>Set Facility</Button>
        </div>
        <div className='input-container-right'>
          <div className='input-title-text'>Appointment Pool</div>
          <Select
            mode="multiple"
            bordered={false}
            showArrow={false}
            className='input-select'
            dropdownStyle={{ display: 'none' }}
            value={formState.appointmentList}
            tagRender={tagRender}
            onChange={event => 
              setFormState({
                ...formState,
                appointmentList: [...event.filter(tag => tag.trim().length !== 0)]
            })
            }
            onInputKeyDown={event => {
              if (event.key === 'Enter') {
                setFormState({
                  ...formState,
                  appointmentList: [
                    ...formState.appointmentList,
                    ...event.target.value.split(',').filter(tag => tag.trim().length !== 0)
                  ]
                });
                event.target.blur();
              }
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddLocationModal;
