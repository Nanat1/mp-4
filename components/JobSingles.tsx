import {JobDetail} from "@/interfaces/JobDetail";

export default function JobSingles(props: {data:JobDetail[]}) {

    return (
        <div id="wrapper">
            {props.data.map((job: JobDetail) =>
                <div key={job.id}>
                    <h3>{job.role}{job.remote? "(remote)" : "(not remote)"}</h3>
                    <h4>{job.company_name}{job.location? ` - ${job.location}` : ""}</h4>
                    <a href={job.url}>Link to their page</a>
                </div>
            )}
        </div>
    )
}