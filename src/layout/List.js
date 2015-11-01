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
        let showSelf = true;
        let showChildren = false;
        if (this.props.children) {
            showSelf = false;
            showChildren = true;
        }
        let itemNodes = [];
        for (let i = 0; i < 100; i ++) {
            itemNodes.push(<li><Link to={ "/item/" + (i + 1)} >Item{i + 1}</Link></li>);
        }
        return (
            <div>
                <div className={"layout layout-list " + (showSelf ? "": "hide")}>
                    <ul>
                        {itemNodes}
                    </ul>
                </div>
                <div className={showChildren ? "": "hide"}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export const LayoutComponent = List;