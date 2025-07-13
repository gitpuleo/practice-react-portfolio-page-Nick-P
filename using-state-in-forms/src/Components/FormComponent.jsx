import {useState} from "react";



function FeedbackForm() {

    const [formData, setFormData] = useState({
    email: "",
    inputName: "",
    feedback: "",
});

const handleChange = (event) => {
    const {name, value} = event.target;
    console.log(`Updating ${name}:`, value);
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};

return(
    <div>
        <h1>Feedback Form</h1>
        <form>
            <label>
                Name:
                <input 
                type="text"
                name="inputName"
                className="form-input"
                value={formData.inputName}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Feedback:
                <input
                type="text"
                name="feedback"
                className="form-input"
                value={formData.feedback}
                onChange={handleChange}
                />
            </label>
        </form>
        <h2>Preview</h2>
        <p>Name: {formData.inputName}</p>
        <p>Email: {formData.email}</p>
        <p>Feedback: {formData.feedback}</p>
    </div>
);
}


export default FeedbackForm;



