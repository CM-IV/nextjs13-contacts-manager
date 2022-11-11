import UpdateContact from "../../../(components)/updateContact";
import type { Contact } from "../../../../types";
import { db } from "../../../(db)/pbInit";


export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'


async function getContact(contactId: string) {

    const data = await db.collection("contacts").getOne<Contact>(contactId);

    //Serialize the data into Plain Old JavaScript Object here
    //Since we are passing it to a client component
    return structuredClone(data) as Contact;
}

export default async function EditContact({ params }: any) {
    const contact = await getContact(params.id);
    console.log(contact)

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