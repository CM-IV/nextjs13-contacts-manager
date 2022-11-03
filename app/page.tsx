'use client';

import { Doughnut, Pie, Radar } from 'react-chartjs-2';
import { dummyPieData } from './(data)/dummyPieData';
import { dummyDoughnutData } from './(data)/dummyDoughnutData';
import { dummyRadarData } from './(data)/dummyRadarData';

export default function Home() {

  return (
    <>
      <section className="section">
          <h1 className="title">
            Contacts Manager
          </h1>
      </section>
      <section className="section">
        <div className="box">
          <h2 className='subtitle'>Lorem Ipsum</h2>
          <div className="tile is-ancestor">
            <div className="tile is-4 is-parent is-vertical">
                <article className="tile is-child box">
                  <Pie data={dummyPieData} />
                </article>
            </div>
            <div className="tile is-4 is-parent is-vertical">
                <article className="tile is-child box">
                  <Doughnut data={dummyDoughnutData} />
                </article>
            </div>
          </div>
        </div>
        <div className="box">
          <h2 className='subtitle'>Lorem Ipsum</h2>
          <div className="tile is-ancestor">
            <div className="tile is-6 is-parent">
                <article className="tile is-child box">
                  <Radar data={dummyRadarData} />
                </article>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
