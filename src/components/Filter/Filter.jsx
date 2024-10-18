import { Div, Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();
    dispatch(changeFilter(normalizedValue));
  };

  return (
    <Div>
      <Label>
        <Input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Find contacts by name" // Add placeholder here
        />
      </Label>
    </Div>
  );
};

export default Filter;
