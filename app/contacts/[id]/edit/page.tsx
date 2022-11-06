import UpdateContact from "../../../(components)/updateContact";
import { db } from "../../../(db)/pbInit"

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'


async function getContact(contactId: string) {

    const data = db.records.getOne("contacts", contactId);
    
    return data;
}

export default async function EditContact({ params }: any) {
    const contact = await getContact(params.id);
    return (
        <>
            <section className="section">
                <h1 className="title">Edit Contact</h1>
            </section>
            <section className="section">
                <UpdateContact data={contact}/>
            </section>
        </>
    )
}