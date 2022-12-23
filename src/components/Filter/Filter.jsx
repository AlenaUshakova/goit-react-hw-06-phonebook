import shortid from 'shortid';
import { FilterName, FilterStyle } from './Filter.styled';

import { useDispatch } from 'react-redux';
import { change } from '../redux/filterSlice';
import { useSelector } from 'react-redux';

export const Filter = () => {
  const nameInputIdThird = shortid.generate();

  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <FilterStyle htmlFor={nameInputIdThird}>
        Find contacts by name
      </FilterStyle>
      <FilterName
        id={nameInputIdThird}
        type="text"
        value={filter}
        onChange={e => dispatch(change(e.currentTarget.value))}
      />
    </div>
  );
};
