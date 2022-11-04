'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function DeleteContact() {

    const router = useRouter();
    const pathname = usePathname();
    const urlId = pathname.split("/")[2].substring(0, 36);

    async function delContact() {
    
        await fetch(`http://localhost:8090/api/collections/contacts/records/${urlId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    
        router.back();
        router.refresh();
    }

    return (
        <form onSubmit={delContact}>
            <div className="field">
                <p className="control">
                    <button className="button is-danger" type="submit">Delete</button>
                </p>
            </div>
        </form>
    )
}