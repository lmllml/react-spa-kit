import React, {
    Component
} from 'react';

class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    _onInput () {
        this.setState({
            text: this.refs.input.value
        })
    }

    render () {
        return (
            <div>
                <h1>欢迎来到美团商超</h1>
                <input value={this.state.text} refs="input" onInput={this._onInput}/>
                <div>{this.state.text}</div>
            </div>
        )
    }
}

export default Home;