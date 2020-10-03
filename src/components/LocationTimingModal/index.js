import React from 'react';
import { 
  Modal,
  Checkbox,
 TimePicker,
 Button,
} from 'antd';
import moment from 'moment';
import { DAY_LIST, DAYS_OBJ } from './../../utils/constant';
import './index.css';

export default function LoactionTiming(props) {
  return (
    <Modal
      {...props}
      title={
        <div className="facility-timing-title">Facility Times</div>
      }
      visible={props.visible}
      okText={'Save'}
      onOk={() => {
        props.saveLocationTiming();
        props.setFacilityTiming(DAY_LIST.map(day => {
          return {
            ...day,
            isChecked: false,
            to: moment().subtract(2, 'hours'),
            from: moment(),
          }
        }));
      }}
      onCancel={e => {
        props.setFacilityTiming(DAY_LIST.map(day => {
          return {
            ...day,
            isChecked: false,
            to: moment().subtract(2, 'hours'),
            from: moment(),
          }
        }));
        props.closeModal();
      }}
      width={800}
    >
      <div className='modal-header'>
        <div className='grid-cell-day'></div>
        <div className='grid-cell-from'>From</div>
        <div className='grid-cell-to'>To</div>
        <div className='grid-cell-button'></div>
      </div>
      {props.facilityTiming && Object.keys(props.facilityTiming).map(day => 
        <div className='modal-body'>
          <div className='grid-cell-day'>
          <Checkbox
            checked={props.facilityTiming[day].isChecked}
            onChange={() => {
              let tempFacilityTiming = { ...props.facilityTiming };
              tempFacilityTiming[day].isChecked = !tempFacilityTiming[day].isChecked;
              props.setFacilityTiming(tempFacilityTiming);
            }}
          >
            {props.facilityTiming[day].name}
          </Checkbox>
          </div>
          <div className='grid-cell-from'>
            <TimePicker
              value={props.facilityTiming[day].to}
              allowClear={false}
              use12Hours
              format={'HH:mm'}
              onChange={event => {
                let tempFacilityTiming = { ...props.facilityTiming };
                tempFacilityTiming[day].to = event;
                props.setFacilityTiming(tempFacilityTiming);
              }}
            />
          </div>
          <div className='grid-cell-to'>
            <TimePicker
              value={props.facilityTiming[day].from}
              allowClear={false}
              use12Hours
              format={'HH:mm'}
              onChange={event => {
                let tempFacilityTiming = { ...props.facilityTiming };
                tempFacilityTiming[day].from = event;
                props.setFacilityTiming(tempFacilityTiming);
              }}
            />
          </div>
          <div className='grid-cell-button'>
            <Button
              className='apply-to-all-checked-button'
              onClick={() => {
                let tempFacilityTiming = { ...props.facilityTiming };
                Object.keys(props.facilityTiming).forEach(date => {
                  if(tempFacilityTiming[date].isChecked) tempFacilityTiming[date] = { ...tempFacilityTiming[date], to: tempFacilityTiming[day].to, from: tempFacilityTiming[day].from };
                });
                props.setFacilityTiming(tempFacilityTiming);
              }}
            >
              Apply To All Checked
            </Button>
          </div>
        </div>
      )}
      
    </Modal>
  )
}
