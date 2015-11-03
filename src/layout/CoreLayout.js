import React,{
    Component
} from 'react';
import {
    Modal
} from 'amazeui-react';

import Loading from '../components/modules/Loading';


class CoreLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: props.pageLoading,
            showTimeoutAlert: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.pageLoading !== this.props.pageLoading) {
            if (nextProps.pageLoading) {
                this.setState({
                    loading: true
                });
                this.timeout = setTimeout(()=> {
                    this.setState({
                        loading: false,
                        showTimeoutAlert: true
                    });
                }, 5 * 1000);
                return this.loadingStartTime = new Date().getTime();
            }
            else {
                let currentTime = new Date().getTime();
                let timeLeft = 500 - (currentTime - this.loadingStartTime);
                if (timeLeft) {
                    return setTimeout(()=> {
                        this.setState({
                            loading: false
                        });
                        this.clearTimeout(this.timeout);
                    }, timeLeft)
                }
                this.setState({
                    loading: false
                });
                clearTimeout(this.timeout);
            }
        }
    }


    render() {
        let modal = (
            <Modal type="alert" closeViaDimmer={true}>
                您的网络不佳, 请稍后试试
            </Modal>
        );
        return (
            <div>
                {this.state.showTimeoutAlert && modal}
                <Loading show={this.state.loading}>
                    正在加载...
                </Loading>
                {this.props.children}
            </div>
        )
    }
}


export default CoreLayout;
