import React from 'react';

import CompanionCard from '@/components/CompanionCard';
import CompanionList from '@/components/CompanionList';
import CTA from '@/components/CTA';
import { recentSessions } from '@/constants';

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#E5D0FF"
        />
        <CompanionCard
          id="456"
          name="Countsy the Number Wizard"
          topic="Topic: Derivatives & Integrals"
          subject="Maths"
          duration={30}
          color="#FFDA6E"
        />
        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="Topic: English Literature "
          subject="Language"
          duration={30}
          color="#BDE7FF"
        />
      </section>

      <section className="home-section">
        <CompanionList
          title="Recently completed session"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
