import '../styles/layout/home.scss';
import React, {
    Component
} from 'react';
import TextInput from '../components/TextInput.js';
import { Link } from 'react-router';


class Home extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="layout layout-home">
                <h1>欢迎来到美团商超</h1>
                <TextInput text={this.props.text} changeText={this.props.actions.changeText}/>  
                <div><Link to="/about">去About页</Link></div>
                <div><Link to="/list">去List页</Link></div>
                <div><img src={require("../imgs/1.gif")}/></div>
                <div className="test-bg"/> 
            </div>
        );
    }
}

export const LayoutComponent = Home;

export function mapStateToProps (state) {
    return {
        text: state.text
    }
}