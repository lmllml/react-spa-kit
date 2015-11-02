import React,{
    Component
} from 'react';


class CoreLayout extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div>
                    {this.props.pageLoading.toString()}
                </div>
                {this.props.children}
            </div>
        )
    }
}


export default CoreLayout;