import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InputName, Label, InputField } from '../common/input/Input.styled';

import { contactsActions } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';

const { changeFilter } = contactsActions;
const { getFilter } = contactsSelectors;

const Filter = () => {
  const filter = useSelector(state => getFilter(state));
  const dispatch = useDispatch();

  const handleChange = e => dispatch(changeFilter(e.target.value));

  return (
    <Label>
      <InputName>Find contacts by name</InputName>
      <InputField
        type="text"
        name="filter"
        onChange={handleChange}
        value={filter}
        placeholder="Enter search name"
        autoComplete="off"
      />
    </Label>
  );
};

export default memo(Filter);
