import JobList from '@/components/JobList';
import {Suspense} from "react";

export default async function JobListPage({params,}: {params: Promise<{pageNo: string}>;}) {
    const pageNo = decodeURIComponent((await params).pageNo);

    return(
        <Suspense
            fallback={
                <main className="flex flex-col items-center justify-center pt-48">
                    <h2>Loading...</h2>
                </main>
            }
        >
            <main id="main-wrapper">
                <JobList pageNo={pageNo} />
            </main>
        </Suspense>
    )
}