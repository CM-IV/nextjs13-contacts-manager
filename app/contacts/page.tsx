import Link from "next/link";
import CreateContact from "../(components)/createContact";
import { db } from "../(db)/pbInit";
import type { Contact } from "../../types";

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

async function fetchContacts() {
 
    const contactsData = await db.collection('contacts').getFullList<Contact>();
    return contactsData as Contact[];

}

export default async function ContactsListPage() {

    const contacts = await fetchContacts();
    console.log(contacts);

    return (
        <>
            <section className="section">
                <h1 className="title">
                    Contacts Page
                </h1>
            </section>
            <section className="section">
                <div className="tile is-ancestor">
                    {contacts?.map((c: Contact) => {
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