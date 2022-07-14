import ReCAPTCHA from "react-google-recaptcha";
import React, {useRef} from 'react';
import axios from "axios";

const Form = () => {

    const recaptchaRef = React.createRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = recaptchaRef.current.getValue();
        console.log(token)
        recaptchaRef.current.reset();


        await axios.post('http://localhost:2000/post/', {token})
            .then(res => console.log(res))
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="input"/>
            <ReCAPTCHA
                sitekey="6Leyq9MgAAAAAGabUNeZEE-qNvhDlUl3hcfxO9z_"
                ref={recaptchaRef}
            />
            <button>Submit</button>
        </form>
    )
}
export default Form
