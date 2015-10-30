import React, {
    Component
} from 'react';
import TextInput from '../components/TextInput.js';

export default class Home extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h1>欢迎来到美团商超</h1>
                <TextInput />                
            </div>
        );
    }
}