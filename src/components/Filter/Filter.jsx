import { useDispatch } from 'react-redux';
import { applyFilter } from 'redux/filterSlice';

import { Label } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const onInputChange = evt => {
    dispatch(applyFilter(evt.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <input onChange={onInputChange}></input>
    </Label>
  );
};

export default Filter;
