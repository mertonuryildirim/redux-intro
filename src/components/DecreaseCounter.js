import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decreaseCounter } from '../redux/actions/counterActions';

class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.decreaseCounter()}>
                    1 Azalt
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    decreaseCounter: () => dispatch(decreaseCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DecreaseCounter);
