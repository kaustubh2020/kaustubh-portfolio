import React from 'react'
import { useForm } from 'react-hook-form'


const mystyle = {
    color: "black",
};

const Form = () => {

    const { register, handleSubmit, errors } = useForm()
    const onSubmit = (data) => console.log(data)
    console.log(errors)
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            method="post"
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            style={mystyle}
        >

            <input type="hidden" name="bot-field" ref={register} />
            <input type="hidden" name="form-name" value="contact" ref={register} />

            <div className="row uniform 50%">
                <div className="6u 12u$(xsmall)">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        ref={register({
                            required: true,
                            maxLength: 30,
                            minLength: 3,
                        })}
                    />
                </div>
                <div className="6u 12u$(xsmall)">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Em@il"
                        ref={register({
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                        })}
                    />
                </div>
                <div className="12u">
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message (optiona)"
                        rows="4"
                        ref={register}
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