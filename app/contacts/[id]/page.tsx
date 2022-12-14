import DeleteContact from "../../(components)/deleteContact";
import Link from "next/link";
import { db } from "../../(db)/pbInit"

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 10,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

async function getContact(contactId: string) {

    const data = db.records.getOne("contacts", contactId)

    return data;
}


export default async function ContactPage({ params }: any) {
    const contact = await getContact(params.id);

    return (
        <>
            <section className="section">
                <h1 className="title">{contact.name}'s Contact Page</h1>
            </section>
            <section className="section">
                <div className="box">
                    <div className="field">
                        <label className="label">Name</label>
                        <p>{contact.name}</p>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <p>{contact.email}</p>
                    </div>
                    <div className="field">
                        <label className="label">Date of Birth</label>
                        <p>{contact.date_of_birth}</p>
                    </div>
                    <div className="field">
                        <label className="label">Workplace</label>
                        <p>{contact.workplace}</p>
                    </div>
                    <hr />
                    <nav className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <DeleteContact />
                            </div>
                            <div className="level-item">
                            <Link href={`/contacts/${contact.id}/edit`}>
                                <button className="button is-success">Edit</button>
                            </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )

}