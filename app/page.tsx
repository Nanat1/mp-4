"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "@/node_modules/styled-components";

function Home() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div>
            <form action="/success" method="POST">
                <h3>Enter the email you&#39;d like to send a message to:</h3>
                <input type="email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)} />
                <h3>Enter the Message you would like to leave:</h3>
                <h2>Subject</h2><input type="text"
                                       value={subject}
                                       onChange={(e) => setSubject(e.target.value)} />
                <textarea id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)} />
                <input type="submit"/>
            </form>
        </div>
    );
}
export default Home