import React,{
    Component
} from 'react';

import Loading from '../components/modules/Loading';


class CoreLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: props.pageLoading
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.pageLoading !== this.props.pageLoading) {
            if (nextProps.pageLoading) {
                this.setState({
                    loading: true
                });
                return this.loadingStartTime = new Date().getTime();
            }
            else {
                let currentTime = new Date().getTime();
                let timeLeft = 500 - (currentTime - this.loadingStartTime);
                if (timeLeft) {
                    return setTimeout(()=> {
                        this.setState({
                            loading: false
                        })
                    }, timeLeft)
                }
                this.setState({
                    loading: false
                });
            }
        }
    }


    render() {
        return (
            <div>
                <Loading show={this.state.loading}>
                    正在加载...
                </Loading>
                {this.props.children}
            </div>
        )
    }
}


export default CoreLayout;
