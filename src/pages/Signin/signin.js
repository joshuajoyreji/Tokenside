import React from 'react'
import './signin.css'
const signin = () => {
  return (
    <div>
    <div class="login-wrapper">
    <form action="" class="form">
      <h2>Sign In</h2>
      <div class="input-group">
        <input type="text" name="loginUser" id="loginUser" required />
        <label for="loginUser">User Name</label>
      </div>
      <div class="input-group">
        <input
          type="password"
          name="loginPassword"
          id="loginPassword"
          required
        />
        <label for="loginPassword">Password</label>
      </div>
      <input type="submit" value="Sign In" class="submit-btn" />
    </form>
  </div>
    </div>
  )
}

export default signin
