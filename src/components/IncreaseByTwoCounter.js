import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseByTwoCounter } from '../redux/actions/counterActions';

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.increaseByTwoCounter()}>
                    2 Arttır
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    increaseByTwoCounter: () => dispatch(increaseByTwoCounter()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IncreaseByTwoCounter);
