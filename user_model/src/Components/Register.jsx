import React from 'react'
import '../Styling/register.css'
import '../JS/register.js'


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
            let userapi = await axios.post("http://localhost:3001/gym/user", {
                name: name,
                email: email,
                password: pswd,
                gender: gender,
                age: age
            })
            toast.success(userapi.data.msg)
        } catch (error) {
            console.log(error)
            // toast.error(userapi.data.msg)
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
                            <input type="text"value={name} onChange={(e)=>{setName(e.target.value)}}
                            id="name" placeholder="Enter your name" required />
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
                        <span class="gender_title mb-3">Gender</span>
                        <input type="radio" name="gender" id="radio_1" />
                        <input type="radio" name="gender" id="radio_2" />
                        <input type="radio" name="gender" id="radio_3" />

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
