import React, {
    Component
} from 'react';

class Item extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <h1>Item{this.props.params.id}</h1>
        );
    }
}

export const LayoutComponent = Item;