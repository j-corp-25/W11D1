import { useState } from 'react';

function Form () {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "home",
        staff: "",
        bio: "",
        notifications: ""
    });

    const handleChange = (field) => {
        return (e) => {
            const newObj = Object.assign({},user[field])
            newObj[field] = e.target.value
            setUser(newObj)
      };
    };





    return(
        <>
        <h1> Sign Up!</h1>
        <form>
            <input  type="text" placeholder='Name' value={user.name} onChange={handleChange("name")}></input>
            <br />
            <input  type="email" placeholder='Email'value={user.email} onChange={handleChange("email")}></input>
            <br />
            <input  type="text" placeholder='Phone number' value={user.phoneNumber} onChange={handleChange("phoneNumber")}></input>
            <br />
            <label> Phone Type:
                <select name="Phonetypes" id="types" value={user.phoneType} onChange={handleChange("phoneType")}>
                    <option value="home"> Home </option>
                    <option value="work"> Work </option>
                    <option value="mobile"> Mobile</option>
                </select>
            </label>
            <br />
            <label> Instructor:
            <input type="radio" name="staff" value="Instructor" checked={user.staff === "Instructor"} onChange={handleChange("staff")}></input>
            </label>
            <label> Student:
            <input type="radio" name="staff" value="Student" checked={user.staff === "Student"} onChange={handleChange("staff")}></input>
            </label>
            <br />
            <textarea rows="5" cols="20" placeholder="Bio" value={user.bio} onChange={handleChange("bio")}></textarea>
            <br />
            <label> Sign up for email notifications:
            <input type="checkbox" name={user.notifications} onChange={handleChange("notifications")}></input>
            </label>
            <br />
            <input type="submit" ></input>
        </form>
    </>
    )
}

export default Form;
