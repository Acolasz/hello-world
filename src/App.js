import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Contacts from './components/Contacts';

const style = {
    marginLeft: 12,
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            valami: undefined
        };
    };

    componentDidMount() {
        //fetch('http://192.168.99.100:31278/sentiment')
          fetch('http://jsonplaceholder.typicode.com/users')  
            .then(response => response.json())
            .then((data) => 
                {this.setState({ products: data })
        });
    }

    onEnterPress = e => {
        if (e.key === 'Enter') {
            this.analyzeSentence();
        }
    };

    render() {
        return (
            <Contacts contacts={this.state.products} />
        );
    }
}

export default App;
