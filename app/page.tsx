"use client";

import Link from "next/link";

function Home() {
    const pageNo = 1;

    return (
        <main id="main-wrapper">
            <main>
                <div>
                    <h2>Would you like to see our Job List?</h2>
                    <Link href={`/${pageNo}`}>Go</Link>
                </div>
            </main>
        </main>
    );
}
export default Home