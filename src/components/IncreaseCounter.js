import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseCounter } from '../redux/actions/counterActions';

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.increaseCounter()}>
                    1 Arttır
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    increaseCounter: () => dispatch(increaseCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IncreaseCounter);
