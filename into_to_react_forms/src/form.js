import { useState } from 'react';

function Form () {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "home",
        // staff: "Student",
        bio: "",
        notifications: "checked"
    });



    return(
        <>
        <h1> Sign Up!</h1>
        <form>
            <input  type="text" placeholder='Name' value={user.name}></input>
            <br />
            <input  type="email" placeholder='Email'value={user.email}></input>
            <br />
            <input  type="text" placeholder='Phone number' value={user.phoneNumber}></input>
            <br />
            <label> Phone Type:
                <select name="Phonetypes" id="types" value={user.phoneType}>
                    <option value="home"> Home </option>
                    <option value="work"> Work </option>
                    <option value="mobile"> Mobile</option>
                </select>
            </label>
            <br />
            <label> Instructor:
            <input type="radio" name="staff" value="Instructor"></input>
            </label>
            <label> Student:
            <input type="radio" name="staff" value="Student"></input>
            </label>
            <br />
            <textarea rows="5" cols="20" placeholder="Bio" value={user.bio}></textarea>
            <br />
            <label> Sign up for email notifications:
            <input type="checkbox" name="notifications" value={user.notifications}></input>
            </label>
            <br />
            <input type="submit" ></input>
        </form>
    </>
    )
}

export default Form;
