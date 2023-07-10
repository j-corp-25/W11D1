

import React from 'react'

function Form () {
    return(
        <>
        <h1> Sign Up!</h1>
        <form>
            {/* <label for="fname">Name</label> */}
            <input  type="text" placeholder='Name'></input>
            <br />


            <input  type="email" placeholder='Email'></input>
            <br />
            <input  type="text" placeholder='Phone number'></input>
            <br />

            <label> Phone Type:
                <select name="Phonetypes" id="types">
                    <option value="home"> Home </option>
                    <option value="work"> Work </option>
                    <option value="mobile"> mobile</option>
                </select>
            </label>
            <br />

            
            <input  type="radio" placeholder='Staff'></input>
            <br />

            <input  type="textarea" placeholder='Bio'></input>
            <br />
            <input  type="check-box" placeholder='Sign up for email notifications'></input>
            <br />


            <input type="submit" ></input>


        </form>
    </>
    )
}

export default Form;
