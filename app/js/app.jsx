const React = require ('react');
const Logger = require ('./logger.jsx')('1234_fake_token', {trace: true});  //start up the logentries code with your token and options
const ERROR = 'error';
const WARN = 'warn';
const INFO = 'info';
const LOG = 'log';

class App extends React.Component {
    //Use bind to set the error type for each link
    render (){
        return (
            <div>
                <div style={{
                    width: '400px'
                }}>
                    Edit the app/js/app.jsx file. Replace the "1234_fake_token" with your token and the links will post correctly to your Logentries.com endpoint.
                    After pressing a link, go check your logentries dashboard and you will see the error recorded at the approriate level.
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '200px'
                }}>
                    <a href="#" onClick={this.sendLog.bind(null, ERROR)}>Submit Error</a>
                    <a href="#" onClick={this.sendLog.bind(null, WARN)}>Submit Warning</a>
                    <a href="#" onClick={this.sendLog.bind(null, INFO)}>Submit Info</a>
                    <a href="#" onClick={this.sendLog.bind(null, LOG)}>Submit Log</a>
                </div>
            </div>
        )
    }

    sendLog (type) {
        //call the approriate type's method (error, warn, log, info)
        Logger[type](type + ' Message');
    }
}

App.displayname = 'App';
module.exports = App;
