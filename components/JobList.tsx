import fetchJobs from "@/lib/fetchJobs";
import JobSingles from "@/components/JobSingles";
import Link from "next/link";

export default async function JobList({pageNo}: { pageNo: string }) {

    let url = 'https://findwork.dev/api/jobs/';

    if (pageNo && pageNo !== "1") {
        url = `https://findwork.dev/api/jobs/?page=${pageNo}`;
    }
    const data = await fetchJobs(url);

    if (!data) {
        return (
            <div>
                {data === undefined ? (
                    <div>
                        <h4>API calls may have exceeded limits. Please Try again later.</h4>
                        <p>The limit for fetching jobs is 60 times per minute.</p>
                    </div>
                ):(
                    <div>
                        <h4>Cannot fetch data from the API. Please Try again later.</h4>
                    </div>
                )}
            </div>
        )
    }

    return (
        <main>
            <nav>
                <ul>
                    <li id="previous">
                        {data.previous === null ?
                            <p>(No previous page)</p>
                        :
                            <p><Link href={`/${Number(pageNo) - 1}`}>Previous</Link></p>
                        }
                    </li>
                    <li id="next">
                        {data.next === null ?
                            <p>(No following page)</p>
                        :
                            <p><Link href={`/${Number(pageNo) + 1}`}>Next</Link></p>
                    }
                    </li>
                </ul>


            </nav>
            <JobSingles data={data.results}/>
        </main>
    )
}