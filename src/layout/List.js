import React, {
    Component
} from 'react';
import { Link } from 'react-router';

import '../styles/layout/list.scss';

class List extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        let itemNodes = [];
        for (let i = 0; i < 100; i ++) {
            itemNodes.push(<li><Link to={ "/item/" + (i + 1)} >Item{i + 1}</Link></li>);
        }
        return (
            <div>
                <div className="layout layout-list">
                    <ul>
                        {itemNodes}
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export const LayoutComponent = List;