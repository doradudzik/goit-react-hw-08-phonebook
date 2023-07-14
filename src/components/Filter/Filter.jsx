import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value } = event.currentTarget;
    dispatch(setFilter(value));
  };
  return (
    <form className={css.form}>
      <label>Find contacts by name:</label>
      <input
        className={css.input}
        type="text"
        value={filter}
        name="filter"
        onChange={handleChange}
      />
    </form>
  );
};

export default Filter;
