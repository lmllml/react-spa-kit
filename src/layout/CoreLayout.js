import React,{
    Component
} from 'react';

import Loading from '../components/modules/Loading';


class CoreLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            toState: ''
        };
        this.props.history.listenBefore(location => {
            console.log(this.props.route);
            this.setState({
                loading: true
            });
            this.loadingStartTime = new Date().getTime();
        });
    }

    componentWillReceiveProps(nextProps) {
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
