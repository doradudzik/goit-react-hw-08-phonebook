import { InfinitySpin } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <InfinitySpin width="200" color="#c05f5b" />
    </div>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool,
};

export default Loader;
