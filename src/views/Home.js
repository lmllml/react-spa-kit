import React, {
    Component
} from 'react';

export default class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    _onInput () {
        this.setState({
            text: this.myTextInput.value
        })
    }

    render () {
        return (
            <div>
                <h1>欢迎来到美团商超</h1>
                <input value={this.state.text} ref={(ref) => this.myTextInput = ref} onInput={this._onInput.bind(this)}/>
                <div>{this.state.text}</div>
            </div>
        );
    }
}