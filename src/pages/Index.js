import React from 'react';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import Main from '../layouts/Main';

const data = {
  labels: ['International Research Papers', 'National Reviews', 'International book chapters', 'Indian patents'],
  datasets: [
    {
      label: '# of Votes',
      data: [80, 5, 9, 7],
      backgroundColor: [
        'rgba(193, 102, 193, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(193, 102, 193, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Index = () => (
  <Main
    description={"Dr. Dipak Pinjari's personal website. Dr. Dipak V. Pinjari is an UGC Assistant Professor in Engineering Sciences at Institute of Chemical Technology (ICT), Mumbai where he was instrumental in setting up the laboratory for process intensification and sustainable engineering. "}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            History about Dr. Dipak Pinjari and much more.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/research">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
        The pie chart below shows about Dr. Dipak Pinjari publications.
      </p>
      <div height="30%">
        <Pie data={data} width="50%" options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </article>
  </Main>
);

export default Index;
