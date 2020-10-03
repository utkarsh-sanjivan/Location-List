import React, { useState } from 'react';
import { 
  Modal,
  Checkbox,
 TimePicker,
 Button,
} from 'antd';
import moment from 'moment';
import { DAY_LIST } from './../../utils/constant';
import './index.css';

export default function LoactionTiming(props) {
  const [daysList, setDaysList] = useState(DAY_LIST.map(day => {
    return {
      ...day,
      isChecked: false,
      to: moment().subtract(2, 'hours'),
      from: moment(),
    }
  }));

  return (
    <Modal
      {...props}
      title={
        <div className="facility-timing-title">Facility Times</div>
      }
      visible={props.visible}
      okText={'Save'}
      onOk={() => {
        props.saveLocationTiming(daysList);
      }}
      onCancel={e => props.closeModal()}
      width={800}
    >
      <div className='modal-header'>
        <div className='grid-cell-day'></div>
        <div className='grid-cell-from'>From</div>
        <div className='grid-cell-to'>To</div>
        <div className='grid-cell-button'></div>
      </div>
      {daysList.map(day => 
        <div className='modal-body'>
          <div className='grid-cell-day'>
            <Checkbox
            checked={day.isChecked}
            onChange={() => {
              setDaysList(daysList.map(date => {
                if(date.id === day.id) date.isChecked = !date.isChecked;
                return date;
              }));
            }}
          >
            {day.name}
          </Checkbox>
          </div>
          <div className='grid-cell-from'>
            <TimePicker
              value={day.to}
              allowClear={false}
              use12Hours
              format={'HH:mm'}
              onChange={event => {
                setDaysList(daysList.map(date => {
                  if(date.id === day.id) date.to = event;
                  return date;
                }));
              }}
            />
          </div>
          <div className='grid-cell-to'>
            <TimePicker
              value={day.from}
              allowClear={false}
              use12Hours
              format={'HH:mm'}
              onChange={event => {
                setDaysList(daysList.map(date => {
                  if(date.id === day.id) date.from = event;
                  return date;
                }));
              }}
            />
          </div>
          <div className='grid-cell-button'>
            <Button
              className='apply-to-all-checked-button'
              onClick={() => {
                setDaysList(daysList.map(date => {
                  if(date.isChecked) {
                    date = { ...date, to: day.to, from: day.from };
                  };
                  return date;
                }))
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
