import GraphComponent from "./(components)/graphComponent";

export default async function Home() {

  return (
    <>
      <section className="section">
          <h1 className="title">
            Contacts Manager
          </h1>
      </section>
      <section className="section">
        <GraphComponent/>
      </section>
    </>
  )
}
