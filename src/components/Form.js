import React from 'react'


const mystyle = {
    color: "black",
};

const Form = () => {
    return (
        <form
            method="post"
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            style={mystyle}
        >

            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <div className="row uniform 50%">
                <div className="6u 12u$(xsmall)">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                    />
                </div>
                <div className="6u 12u$(xsmall)">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Em@il"
                    />
                </div>
                <div className="12u">
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message (optional)"
                        rows="4"
                    />
                </div>
            </div>
            <ul className="actions" style={{ marginTop: 30 }}>
                <li>
                    <input type="submit" value="Send Message 💌" />
                </li>
            </ul>
        </form>
    )
}

export default Form 