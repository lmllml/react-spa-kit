import '../../styles/modules/loading.scss';
import React,{
    Component
} from 'react';

import {Modal} from 'amazeui-react';


class Loading extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        if (this.props.show) {
            return (
                <Modal
                    closeIcon={false}
                    closeViaDimmer={false}>
                    <div className='page-loading'>
                        <div className="spinner-loader">
                            {this.props.children}
                        </div>
                    </div>
                </Modal>
            )
        }
        return null
    }
}


export default Loading;
