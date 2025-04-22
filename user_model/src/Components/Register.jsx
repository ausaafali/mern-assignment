import React from 'react'
import '../Styling/register.css'
import '../JS/register.js'


export default function Register() {
    return (
        <div>
            <div class="container registration">
                <div class="title">
                    <p>Registration</p>
                </div>

                <div className='form'>
                    <div class="user_details">
                        <div class="input_box">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" placeholder="Enter your name" required />
                        </div>
                        <div class="input_box">
                            <label for="username">Username</label>
                            <input type="text" id="username" placeholder="Enter your username" required />
                        </div>
                        <div class="input_box">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" required />
                        </div>
                        <div class="input_box">
                            <label for="phone">Phone Number</label>
                            <input type="number" id="phone" placeholder="Enter your number" required />
                        </div>
                        <div class="input_box">
                            <label for="pass">Password</label>
                            <input type="password" id="pass" placeholder="Enter your password" required />
                        </div>
                        <div class="input_box">
                            <label for="confirmPass">Confirm Password</label>
                            <input type="password" id="confirmPass" placeholder="Confirm your password" required />
                        </div>
                    </div>
                    <div class="gender">
                        <span class="gender_title">Gender</span>
                        <input type="radio" name="gender" id="radio_1" />
                        <input type="radio" name="gender" id="radio_2" />
                        <input type="radio" name="gender" id="radio_3" />

                        <div class="category">
                            <label for="radio_1">
                                <span class="dot one"></span>
                                <span>Male</span>
                            </label>
                            <label for="radio_2">
                                <span class="dot two"></span>
                                <span>Female</span>
                            </label>
                            <label for="radio_3">
                                <span class="dot three"></span>
                                <span>Prefer not to say</span>
                            </label>
                        </div>
                        <div class="reg_btn">
                            <input type="submit" value="Register" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
