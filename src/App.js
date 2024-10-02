/* eslint-disable no-useless-constructor */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductRequest } from "./redux/actions/productActions";
import HomeProduct from "./components/ProductList";

class App extends React.Component {
  state = {
    search: '',
    filter: false,
  };

  _doGetProduct = () => {
      // GET Product ALL
      this.props.productGetRequest();
  };

  componentDidMount() {
    this._doGetProduct();
  }

  render() {
    const {products} = this.props;
    return (
      <div>
        <HomeProduct />
      </div>
    );
  }

}

App.propTypes = {
  productGetRequest: PropTypes.func,
  products: PropTypes.array
};

const mapStateToProps = (state) => ({
  error: state.error,
  products: state.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    productGetRequest: (params) => dispatch(getProductRequest(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

