# React Native + Backand JavaScript SDK
An example of React Native project with Backand Inetgartion and workflow based on
[react-native-cli](https://facebook.github.io/react-native/docs/getting-started.html)

# Prerequisites 
1. Install latest nodeJs https://nodejs.org/

2. Install React Native CLI(This is global Dependency). [react-native-cli](https://facebook.github.io/react-native/docs/getting-started.html)
```bash
npm install -g react-native-cli
```

Note : If you get an error like Cannot find module 'npmlog', try installing npm directly: curl -0 -L https://npmjs.org/install.sh | sudo sh.

Read more [react-native-cli](https://facebook.github.io/react-native/docs/getting-started.html)

# Getting started
1. Clone Project
```bash
 $ git clone https://github.com/backand/react-native-example.git
 $ cd react-native-example
```    
2. Go to project folder and install dependencies:
 ```bash
 npm install
 ```

3. Update Backand configurations in `app.js`
 ```javascript
 //backand credentials goes here.
 ```   
4. Set up your emulator
ios: https://facebook.github.io/react-native/docs/getting-started.html#xcode (install xcode)  
android: https://facebook.github.io/react-native/docs/getting-started.html#4-set-up-your-android-virtual-device (install Android Studio and run avd)

5. Launch app
 ```bash
 $ react-native run-ios
 $ react-native run-android 
 ```


Error and Solutions - 
1. Unrecognized font family "FontAwesome"
   ```bash
   npm install react-native-vector-icons --save
   react-native link react-native-vector-icons
   ```

- ENJOY! :smile:
