import React, {Component} from "react";

class StateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: 5
        };
        this.incrementNumber = this.incrementNumber.bind(this);
        console.log("Constructor: Component is being constructed.");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps: Syncing state with props if needed. " + props.title +  " - " + state.numero  );
        return true; // No state update needed
    }

    componentDidMount() {
        console.log("componentDidMount: Component has mounted.");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate: Deciding to re-render or not.");
        console.log("Current Props: " + this.props.title + " - Current State: " + this.state.numero);
        console.log("Next Props: " + nextProps.title + " - Next State: " + nextState.numero);   
        return true; // Always re-render
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate: Component has updated.");
    }

    incrementNumber = () => {
        console.log("incrementNumber: Incrementing number.");
        this.setState({numero: this.state.numero + 1});
    }

    render() {
        console.log("Render: Component is rendering.");
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>This is a simple stateful component.</p>
                <p>Current number: {this.state.numero}</p>
                <button onClick={this.incrementNumber}>Increment Number</button>    
            </div>
        );
    }
}

export default StateComponent;