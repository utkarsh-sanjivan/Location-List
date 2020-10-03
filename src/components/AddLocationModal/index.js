import React, { useState } from 'react';
import { Modal, Input, Select } from 'antd';
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
    state: '',
    zipCode: '',
    phoneNumber: '',
    timeZone: '',
    facility: '',
    appointmentList: [],
  });
  const [isNameValid, setIsNameValid] = useState(true);
  const [isZipCodeValid, setIsZipCodeValid] = useState(true);

  return (
    <Modal
      {...props}
      title={
          <div className="add-location-title">Add Location</div>
      }
      visible={props.visible}
      okText={'Save'}
      onOk={() => {
        setIsNameValid(validateName(formState.name));
        setIsZipCodeValid(validateZipCode(formState.zipCode));
        if(validateName(formState.name) && validateZipCode(formState.zipCode)) props.saveLocation(formState);
      }}
      onCancel={e => props.closeModal()}
      width={800}
    >
      <div style={{ marginBottom: '25px' }}>
        <div className='input-title-text'>Location Name</div>
        <Input
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
            placeholder='Address Line 1'
            className='input-text'
            onChange={event => setFormState({ ...formState, addressLine1: event.target.value })}
          />
        </div>
        <div className='input-container-right'>
          <div className='input-title-text'>Suite No.</div>
          <Input
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
            placeholder='Address Line 2'
            className='input-text'
            onChange={event => setFormState({ ...formState, addressLine2: event.target.value })}
          />
        </div>
        <div  style={{ width: '50%', display: 'flex'}}>
          <div className='input-container-left'>
            <div className='input-title-text'>City</div>
            <Input
              placeholder='City'
              className='input-text'
              onChange={event => setFormState({ ...formState, city: event.target.value })}
            />
          </div>
          <div className='input-container-right'>
            <div className='input-title-text'>State</div>
            <Select
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
              onChange={event => setFormState({ ...formState, phoneNumber: event.target.value })}
              onPressEnter={event => setFormState({ ...formState, phoneNumber: normalizePhoneNumber(event.target.value) })}
              onBlur={event => setFormState({ ...formState, phoneNumber: normalizePhoneNumber(event.target.value) })}
            />
          </div>
        </div>
        <div className='input-container-right'>
          <div className='input-title-text'>Time Zone</div>
          <Select
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
          <div className='input-title-text'>Facility</div>
          {/* <Input
            placeholder='Facility'
            className='input-text'
            onChange={event => setFormState({ ...formState, facility: event.target.value })}
          /> */}
        </div>
        <div className='input-container-right'>
          <div className='input-title-text'>Appointment Pool</div>
          <Select
            mode="multiple"
            placeholder='Appointment Pool'
            bordered={false}
            showArrow={false}
            className='input-select'
            dropdownStyle={{ display: 'none' }}
            onChange={() => {}}
            value={formState.appointmentList}
            onInputKeyDown={event => {
              if (event.key === 'Enter') {
                setFormState({
                  ...formState,
                  appointmentList: [
                    ...formState.appointmentList,
                    ...event.target.value.split(',')
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
