"use server";

import {JobData} from "@/interfaces/JobData";

const key = process.env.WORK_KEY;
const token = (key === 'key')
    ? ''
    : `Token ${key}`

export default async function fetchJobs(url: string): Promise<JobData | undefined> {
        try {

            // rewrite "curl https://findwork.dev/api/jobs/ --silent --header 'Authorization: Token xxxx'" in API doc
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            // Solution for can't assign x | undefined to type x
            if (data?.results === undefined) {
                return undefined;
            } else {
                return data;
            }
        } catch (e) {
            console.error(e);
        }
}

// originally used resend API; abandoned since resend requires an external package
/* import { Resend } from 'resend';

const resend_api = process.env.RESEND_API;
const resend = new Resend(resend_api); */


/*
function GetTransport() {
    // Define default position
    const [position, setPosition] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
    async function initMap(): Promise<void> {

        // Previous API Google Map, require external package "@react-google-maps/api"
        // API Google Translate also require "@google-cloud/translate"
        // Async request Google provided library "maps" as a Google provided library type
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

        // Create map
        const map = new Map(document.getElementById('map') as HTMLElement,
            {
                zoom: 16,
                center: position,
            });


        // originally used resend API, require external package "resend"
        // const {resendData, resendError} = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: { email },
            subject: 'Hello World',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        });
        if (resendError) {
            return console.log(resendError);
        }
        setData(resendData);


    }
    initMap()
        .then(() => console.log("Google Map initialized successfully."));
}, [map])

    return (
        <h1>Your email is successfully sent to `${email}`!</h1>
    )
}
*/