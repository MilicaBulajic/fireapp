## 1 start

Created new project on firebase server and connected with this CRA project by passing the values in ENV files. Then created firebase.js file.

## 2 Developed Signup component and styled by MUI

## 3 Auth context setup

I want to be able to access current user anywhere in app, so in a new folder named contexts I've created AuthContext file. There is signup function where I call createUserWithEmailAndPassword function by Firebase Modular.

## 4 debugger - reminder: after catch

```
console.log(error);

```

## 5 setup error

functionality - try catch for sign up, because this is an asynchronous event

## 6 routing setup

## private route

check that currentUser is authenticated - if no go to login page

## creating other components

login and forgot pass components developed in similar way as first one(sign up)
