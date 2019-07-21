<h1 align="center">
  <img src="./src/assets/images/logo.png"/><br>
  React Native Navigation + Firebase + MobX + Other Goodies
</h1>

A React Native starter app with Wix React Native Navigation V2, MobX, Lottie, Firebase and more...

Architecture includes navigation, registering and login with Firebase, Lottie animations and some default packages I tend to use.

Also includes a default [Firebase Cloud Function](https://firebase.google.com/docs/functions/) for saving user info to Firebase when registering.

## 🤓 Tech Stack
- [React Native](https://facebook.github.io/react-native/)
- [React Native Navigation V2](https://github.com/wix/react-native-navigation) - A native navigation stack
- [MobX](http://mobx.js.org) - Observable data store
- [Lottie](https://airbnb.design/lottie) - Awesome animations
- [React Native Linear Gradients](https://github.com/react-native-community/react-native-linear-gradient) - Gradients
- [React Native Keyboard Aware ScrollView](https://github.com/APSL/react-native-keyboard-aware-scroll-view) - Pesky keyboards

<br/>
<h4 align="center" style="color:red;">👇👇👇 DO THIS BEFORE RUNNING 👇👇👇</h4>

## ✅ Setup  

### 🔥 Setup Firebase
Create a new firebase project [here](https://console.firebase.google.com/) and set up an iOS or Android project with a bundleID. Download the cooresponding `plist` or `json` files.  

🍎_**If building for iOS**_  
Copy `GoogleService-Info.plist` to overwrite the placeholder file in the `ios` folder.

🤖_**If building for Android**_  
Copy `google-services.json` to overwrite the placeholder file in the `android/app` folder.

Add the project name to `.firebaserc` on `line 3`. 

🔥_**If you want to use Firebase Cloud Functions**_  
You will need to set up firebase's CLI tools and deploy. For more info, see [their intro docs here.](https://firebase.google.com/docs/functions/get-started)  
```bash
$ firebase deploy --only functions
```

❉ __Install Node Packages__  
```bash
$ yarn
```

♻️ __Change the project name__  
If you want to easily rename the project, you can do so with [React Native Rename](https://github.com/junedomingo/react-native-rename) and use it like:  
```bash
$ react-native-rename <newName>
```

📲 __Run React Native Simulator__  
```bash
$ react-native run-ios  
or  
$ react-native run-ios  
```
