<template>
  <div>
    <h1>Login</h1>
    <input id="email" type="email" placeholder="Email" v-model="email"> <br />
    <input id="password" type="password" placeholder="Password" v-model="password"> <br />
    <button @click="login">Login</button>
    <p>Don't have a account? <router-link to="/signup">Sign Up!</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      initials: "",
    }
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log(user);
          },
          (err) => {
            alert(err);
          }
        );
    },
  },
};
</script>

<style>
div {
  text-align: center
}

input {
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  background: #e2e2e2;
}

button {
  margin: 10px;
  background: #9d9dff;
  padding: 10px 15px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
}
</style>