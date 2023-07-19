// import React from 'react';
// import PropTypes from 'prop-types';

// const Filter = ({ value, onChange }) => (
//   <label>
//     Find contacts by name
//     <input type="text" value={value} onChange={onChange} />
//   </label>
// );

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// export default Filter;

// import React from 'react';
// import PropTypes from 'prop-types';

// const Filter = ({ value, onChange }) => (
//   <label>
//     Find contacts by name:
//     <input type="text" value={value} onChange={onChange} />
//   </label>
// );

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// export default Filter;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../reduxFiles/storeRedux';
import { selectFilter } from '../../reduxFiles/selectorsRedux';
import PropTypes from 'prop-types';

const Filter = ({ onChange }) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
    onChange();
  };

  return (
    <label>
      Find contacts by name:
      <input type="text" value={filter} onChange={handleFilterChange} />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
