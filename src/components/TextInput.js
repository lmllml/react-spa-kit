import React, {
    Component
} from 'react';

export default class TextInput extends Component {
    _changeText () {
        this.props.changeText(this._input.value);
    }
    render () {
        return (
            <div>
                <input value={this.props.text} ref={(c) => this._input = c } onInput={this._changeText.bind(this)}/>
                <div>{this.props.text}</div>
            </div>
        );
    }
}