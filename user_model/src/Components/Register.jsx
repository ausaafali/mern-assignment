
import '../Styling/register.css'
import '../JS/register.js'
import React, { useState } from 'react'
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";


export default function Register() {


    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [pswd, setPswd] = useState("")
    let [gender, setGender] = useState("")
    let [age, setAge] = useState(0)

    function clear() {
        setName("");
        setEmail("");
        setGender("");
        setPswd("");
        setAge(0);
    }

    async function register_user(e) {
        e.preventDefault()
        try {

            let password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            let username_regex = /^[A-Za-z ]+$/;

            if (!name || !email || !pswd || !gender || age == 0) {
                toast.error("All Fields Are Required");
                return;
            }

            if (!password_regex.test(pswd)) {
                toast.error("Password must contain 1 lower case, uppercase, digit, special character and having length of 8 character minimum");
                return;
            }

            if (!username_regex.test(name)) {
                toast.error("Username should only contains alphabets and a space");
                return;
            }


            let userapi = await axios.post("http://localhost:3007/stuff/user", {
                name: name,
                email: email,
                password: pswd,
                gender: gender,
                age: age
            })
            toast.success(userapi.data.msg)

        } catch (error) {
            if (error.status === 409) {
                toast.error("Email already Exists");
            } else {
                console.log(error);
            }
        }
    }



    return (
        <div>
            <div class="container registration">
                <div class="title">
                    <p>Registration</p>
                </div>

                <div className='form my-5 bg-light shadow rounded'>
                    <div class="user_details">
                        <div class="input_box">
                            <label for="name">Full Name</label>
                            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }}
                                id="name" placeholder="Enter your name" required />
                        </div>
                        <div class="input_box">
                            <label for="email">Email</label>
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }}
                                type="email" id="email" placeholder="Enter your email" required />
                        </div>
                        <div class="input_box">
                            <label for="phone">Age</label>
                            <input value={age} onChange={(e) => { setAge(e.target.value) }}
                                type="number" id="phone" placeholder="Enter your number" required />
                        </div>
                        <div class="input_box">
                            <label for="pass">Password</label>
                            <input value={pswd} onChange={(e) => { setPswd(e.target.value) }}
                                type="password" id="pass" placeholder="Enter your password" required />
                        </div>
                    </div>
                    <div class="gender">
                        <span class="gender_title mb-3">Gender</span>
                        <input type="radio" name="gender" value="male" id="radio_1" required
                            onChange={(e) => setGender(e.target.value)} checked={gender === "male"} />
                        <input type="radio" name="gender" value="female" id="radio_2" required
                            onChange={(e) => setGender(e.target.value)} checked={gender === "female"} />
                        <input type="radio" name="gender" value="custom" id="radio_3" required
                            onChange={(e) => setGender(e.target.value)} checked={gender === "custom"} />

                        <div class="category d-flex flex-column justify-content-center">
                            <label for="radio_1" className=''>
                                <span class="dot one"></span>
                                <span>Male</span>
                            </label>
                            <label for="radio_2" className=''>
                                <span class="dot two"></span>
                                <span>Female</span>
                            </label>
                            <label for="radio_3" className=''>
                                <span class="dot three"></span>
                                <span>Custom</span>
                            </label>
                        </div>
                        <div class="reg_btn">
                            <button className='btn btn-primary py-1 px-3' type="submit" onClick={register_user} value="Register">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    )
}
