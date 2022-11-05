import Link from "next/link";
import CreateContact from "../(components)/createContact";

interface Contacts {
    id: string;
    name: string;
    date_of_birth: string;
    workplace: string;
}

async function fetchContacts() {
    
    const res = await fetch(`http://localhost:8090/api/collections/contacts/records?page=1&perPage=3`,
        { cache: 'no-store' }
    );
    const contactsData = await res.json();
    return contactsData?.items as Contacts[];

}

export default async function ContactsListPage() {

    const contacts = await fetchContacts();


    return (
        <>
            <section className="section">
                <h1 className="title">
                    Contacts Page
                </h1>
            </section>
            <section className="section">
                <div className="tile is-ancestor">
                    {contacts?.map((c: Contacts) => {
                        return (
                            <div className="tile is-4 is-parent" key={c.id}>
                                <div className="tile is-child box">
                                    <Link
                                        href={`/contacts/${c.id}`}
                                    >
                                        <h2 className="subtitle">{c.name}</h2>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="section">
                <h2 className="subtitle">Create a Contact</h2>
                <CreateContact />
            </section>
        </>
    )
}