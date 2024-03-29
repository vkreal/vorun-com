import React, { Component } from 'react';
import Header from './components/Header'
import AppList from './components/AppList'
import Spacer from './components/Spacer'
import Social from './components/Social'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Spacer axis="vertical" size={30} />
                <Social />
                <AppList />
            </div>
        );
    }
}
export default App;