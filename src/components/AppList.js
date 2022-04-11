import React, { Component } from 'react';
import AppListItem from './AppListItem';
import Spacer from './Spacer';

class AppList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    componentWillUnmount()
    componentDidUpdate(prevProps, prevState, snapshot) {}
    componentDidMount() {
        fetch(location.origin + "/assets/appList.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        return (
            <div>
                {this.state.items.map(function (item, index) {
                    return <div key={index}><Spacer axis="vertical" size={40} /><AppListItem item={item}/></div>;
                })}
            </div>
        );
    }
}
export default AppList;