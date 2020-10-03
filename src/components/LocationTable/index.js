import React from 'react';
import { Table, Empty, Skeleton } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  VerticalLeftOutlined,
  LeftOutlined,
  RightOutlined,
  VerticalRightOutlined,
} from '@ant-design/icons';
import './index.css';

const TableDetails = props => {
  const columns = [{
    title: () => <div className='header-container'>
      <div className='header-id'></div>
      <div className='header-middle'>Location Name</div>
      <div className='header-middle'>Address</div>
      <div className='header-middle'>Phone No.</div>
      <div className='header-action'></div>
    </div>,
    dataIndex: 'id',
    width: '98vw',
    key: 'id',
    render: (id, record) => <div className='body-container'>
      <div className='body-id'><div className='container-id'>{id}</div></div>
      <div className='body-middle'>{record.locationName}</div>
      <div className='body-middle'>{record.address}</div>
      <div className='body-middle'>{record.phoneNo}</div>
      <div className='body-action'>
        <EditOutlined
          className='edit-icon'
          onClick={() => props.editLocation(record)}
        />
        <DeleteOutlined
          className='delete-icon'
          onClick={() => props.deleteLocation(record)}
        />
      </div>
    </div>,
  }];

  const footer = () => <div className='footer'>
    <div className='footer-inner-container'>
      <div className='page-number-dropdown-container'>
        Items per page:
        <select defaultValue={props.recordsPerPage} className='page-number-dropdown'>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </div>
      <div className='page-number-info-container'>{props.currentPage} - {props.currentPage} of {props.totalPages}</div>
      <div className='page-change-icon-container'>
        <VerticalRightOutlined
          className='page-change-icon'
          onClick={() => props.startPage()}
        />
        <LeftOutlined
          className='page-change-icon'
          onClick={() => props.previousPage()}
        />
        <RightOutlined
          className='page-change-icon'
          onClick={() => props.nextPage()}
        />
        <VerticalLeftOutlined
          className='page-change-icon'
          onClick={() => props.lastPage()}
        />
      </div>
    </div>
  </div>

  return (
    <div className="location-table-container">
      {props.loading?
        <Skeleton
          loading={true}
          active
        />
        : props.dataSource.length === 0?
          <Empty
            image={<div className='no-location-image-container'><i class="fa fa-map-marker no-location-image" aria-hidden="true"></i></div>}
            description={<>
              <div className='no-location-title'>There is no location added right now</div>
              <div className='no-location-sub-title'>Kindly Add Aour Location First</div>
            </>}
          />
          : <Table
            {...props}
            dataSource={props.dataSource}
            columns={columns}
            footer={footer}
            pagination={false}
          />}
    </div>
  );
};

export default TableDetails;
