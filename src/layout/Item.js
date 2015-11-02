import React, {
    Component
} from 'react';

class Item extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h1>Item{this.props.params.id}</h1>
            </div>
        );
    }
}

export const LayoutComponent = Item;