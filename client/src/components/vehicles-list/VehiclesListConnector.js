import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems } from '../../actions/fetch-items-actions';
import { search } from '../../actions/search-actions';
import VehicleListContainer from './VehiclesListContainer';
import { getFilteredI } from '../../selectors/items-entities-selectors';
import { getIsError, getIsLoading } from '../../selectors';

const mapStateToProps = (state) => {
  /*     const vehicles = getVehicles(state);
    return { items, isLoading, isError }; */
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchItems, search }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleListContainer);
