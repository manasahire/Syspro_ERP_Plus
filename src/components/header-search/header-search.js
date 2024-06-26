import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import { Col, Input, Row } from 'antd';
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { Div } from './header-search-style';
// import { headerSearchAction } from '../../redux/headerSearch/actionCreator';
import { Popover } from '../popup/popup';

function HeaderSearch() {
  // const dispatch = useDispatch();
  // const searchData = useSelector((state) => state.headerSearchData);
  // const rtl = useSelector((state) => state.ChangeLayoutMode.rtlData);

  // const search = (e) => {
  //   dispatch(headerSearchAction(e.target.value));
  // };

  // const content = (
  //   <div>
  //     {searchData.length ? (
  //       searchData.map((group) => {
  //         const { title, count, id } = group;
  //         return (
  //           <NavLink key={id} to="#">
  //             {title}
  //             <span className="certain-search-item-count">{count} people</span>
  //           </NavLink>
  //         );
  //       })
  //     ) : (
  //       <NavLink to="#">Data Not found....</NavLink>
  //     )}
  //   </div>
  // );

  return (
    <>
      <Div className="certain-category-search-wrapper" style={{ width: '100%' }}>
        <Row className="ant-row-middle">
          <Col md={2} xs={1} className="text-right">
            <span className="certain-category-icon">
              <UilSearch />
            </span>
          </Col>
          <Col md={22} xs={23}>
            <Popover
              placement="bottomLeft"
              // content={content}
              title="Search List"
              action="focus"
            >
              {/* onInput={search} */}
              <Input placeholder="Search..." />
            </Popover>
          </Col>
        </Row>
      </Div>
    </>
  );
}

export default HeaderSearch;
