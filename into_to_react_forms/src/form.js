import { useState } from 'react';
import  PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input';


function Form () {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        staff: "",
        bio: "",
        notifications: ""
    });

    const [errors,setErrors] = useState([])

    const handleChange = (field) => {
        return (e) => {
            // const newObj = Object.assign({}, user, {[field]: e.target.value});
            const newObj = Object.assign({}, user);
            newObj[field] = e.target.value;
            setUser(newObj);
      };
    };

    const handleSubmit = (e) => {
            e.preventDefault();
            // debugger;
            console.log(user);

            let errors = validate();

            setErrors(errors);


            if (errors.length === 0) {
                setUser({ name: "",
                email: "",
                phoneNumber: "",
                phoneType: "",
                staff: "",
                bio: "",
                notifications: ""})
            };
    }

    const showErrors = () => {
        if (!errors.length) return null;
        return (
            <ul>
                <li>{errors[0]}</li>
            </ul>
        )
    }

    const validate = () => {
        let errors = [];
        if (!isValidPhoneNumber(user.phoneNumber)) {
            errors.push("Invalid phone number");
        }
        return errors;

    }


    return(
        <>
        {showErrors()}
        <h1> Sign Up!</h1>
        <form onSubmit={handleSubmit}>
            <input  type="text" placeholder='Name' value={user.name} onChange={handleChange("name")} required></input>
            <br />
            <input  type="email" placeholder='Email' value={user.email} onChange={handleChange("email")} required></input>
            <br />
            <input  type="text" placeholder='+1 111-111-1111' value={user.phoneNumber} onChange={handleChange("phoneNumber")}></input>
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
            <textarea rows="5" cols="20" placeholder="Bio" value={user.bio} onChange={handleChange("bio")} maxLength="280"></textarea>
            <br />
            <label> Sign up for email notifications:
            <input type="checkbox" name={user.notifications} onChange={handleChange("notifications")}></input>
            </label>
            <br />
            <button>Submit</button>
        </form>
    </>
    )
}

export default Form;
