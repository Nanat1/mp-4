import JobList from '@/components/JobList';

export default async function JobListPage({params}: {params: {pageNo: string}}) {
    const pageNo = decodeURIComponent(params.pageNo);

    return(
            <main>
                <JobList pageNo={pageNo} />
            </main>
    )
}