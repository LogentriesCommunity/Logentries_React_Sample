Logentries React Sample
=======================


To build the sample:
- Replace the token in app/app.jsx with your Logentries token (see below)
- Install node.js version => 0.12
- Install <i>npm install -g webpack</i> (or use the bin path in node_modules below where we call webpack)
- Run <i>npm install</i>
- Run <i>webpack webpack.config.js</i>
- Open app/index.html in a web browser

Connecting the sample to you Logentries account
------------------------------------------------
- Edit the app/js/app.jsx file.
- Replace the "1234_fake_token" with your token and the links will post correctly to your Logentries.com endpoint.


```
const Logger = require ('./logger.jsx')('1234_fake_token', {trace: true});
```
becomes
```
const Logger = require ('./logger.jsx')('your token', {trace: true});
```
