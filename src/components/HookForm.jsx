import React, { useState} from 'react'

//CREATING THE COMPONENT STATE LEGO PIECE
const HookForm = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    // PREVENT DEFAULT
    const createUser = (e) => {
        e.preventDefault();
    }

    // VALIDATIONS/ERRORS
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmError, setConfirmError] = useState('');

    const firstNameHandler = (e) => {
        setFirstName(e.target.value)
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstNameError("First name must be at least 2 characters long.")
        }
        else {
            setFirstNameError('')
        }
    }

    const lastNameHandler = (e) => {
        setLastName(e.target.value)
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setLastNameError("Last name must be at least 2 characters long.")
        }
        else {
            setLastNameError('')
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailError("Email must be at least 5 characters long.")
        }
        else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordError("Password must be at least 8 characters long.")
        }
        else {
            setPasswordError('')
        }
    }

    const confirmHandler = (e) => {
        setConfirm(e.target.value)
        if (e.target.value.length < 8 && e.target.value.length > 0) {
            setConfirmError("Confirm password must be at least 8 characters long.")
        }
        else {
            if (password == e.target.value || e.target.value.length == 0) {
                setConfirmError('')
            }
            else {
                setConfirmError("Passwords do not match.")
            }
        }
    }

    return (
    <>
    <div className="card mt-3">
        <h5 className="card-header">Make a User</h5>
        <div className="card-body">
            <form className="mt-3">
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="form-control"
                        value={firstName}
                        onChange={ (e) => { firstNameHandler(e) } }
                            />
                    <span>{firstNameError}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="form-control"
                        value={lastName}
                        onChange={ (e) => { lastNameHandler(e) } }
                            />
                    <span>{lastNameError}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={ (e) => { emailHandler(e) } }
                            />
                    <span>{emailError}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={ (e) => { passwordHandler(e) } }
                            />
                    <span>{passwordError}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirm" className="form-label">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm"
                        id="confirm"
                        className="form-control"
                        value={confirm}
                        onChange={ (e) => { confirmHandler(e) } }
                            />
                    <span>{confirmError}</span>
                </div>
            </form>
        </div>
            </div>
            <div className="card">
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirm}</p>
            </div>

    </>
)
}

export default HookForm
