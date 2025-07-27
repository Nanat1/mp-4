"use client";

import { useState, useEffect } from "react";

// originally used resend API; abandoned since resend requires an external package
/* import { Resend } from 'resend';

const resend_api = process.env.RESEND_API;
const resend = new Resend(resend_api); */


function SuccessPage() {
    const [data,setData] = useState([]);

    useEffect(() => {
    async function sendEmail(): Promise<void> {

        // originally used resend API; abandoned since resend requires an external package
        /* const {resendData, resendError} = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: { email },
            subject: 'Hello World',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        });
        if (resendError) {
            return console.log(resendError);
        }
        setData(resendData); */


    }
    sendEmail()
        .then(() => console.log("Email sent Successfully."));
}, [])

    return (

        <h1>Your email is successfully sent to `${email}`!</h1>
    )
}