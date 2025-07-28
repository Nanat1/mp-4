import {JobDetail} from "@/interfaces/JobDetail";
import styled from '@emotion/styled';

const JobDiv = styled.div`
    margin: 10px;
    background-color: #eee;
    border-radius: 4px;
    width: 100%;
`;

export default function JobSingles(props: {data:JobDetail[]}) {

    return (
        <div>
            {props.data.map((job: JobDetail) =>
                <JobDiv key={job.id}>
                    <h3>{job.role}{job.remote? "(remote)" : "(not remote)"}</h3>
                    <h4>{job.company_name}{job.location? ` - ${job.location}` : ""}</h4>
                    <div>{job.text}</div>
                    <a href={job.url}>Link to their page</a>
                </JobDiv>
            )
            }
        </div>
    )
}