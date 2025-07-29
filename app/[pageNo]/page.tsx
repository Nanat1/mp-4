import JobList from '@/components/JobList';
import {JobListProps} from "@/interfaces/JobListProps";

export default async function JobListPage({params}: JobListProps) {
    const pageNo = decodeURIComponent(params.pageNo);

    return(
            <main id="main-wrapper">
                <JobList pageNo={pageNo} />
            </main>
    )
}