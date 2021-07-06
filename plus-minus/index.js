/* eslint-disable react/prefer-stateless-function */
/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
import React from 'react';
import ReactDOM from 'react-dom';

const buttonStyle={
    fontSize: '40px',
    width: '60px',
    height: '60px',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '12px',
};

const resultStyle={
    fontSize: '20px',
    margin: '0px 32px',
};

const pageStyle={
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const PlusButton=(props) => {
    return <button type="button" onClick={props.onClick} style={buttonStyle}>+</button>;
};

const MinusButton=(props) => {
    return <button type="button" onClick={props.onClick} style={buttonStyle}>-</button>;
};

const Result=(props) => {
    return (
        <div style={resultStyle}>{props.result}</div>
    );
};

class Page extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            Result: 0,
        };
    }
    minusClick() {
        const Result=this.state.Result;
        this.setState({
            Result: Result-1,
        });
    };
    plusClick() {
        const Result=this.state.Result;
        this.setState({
            Result: Result+1,
        });
    };
    render() {
        const result=this.state.Result;
        return (
            <div style={pageStyle}>
                <MinusButton onClick={() => this.minusClick()} />
                <Result result={result} />
                <PlusButton onClick={() => this.plusClick()} />
            </div>
        );
    }
}

export default Page;

