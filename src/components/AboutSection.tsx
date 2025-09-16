import React from 'react';

const AboutSection = () => {
  return (
    <section id="about-section" className="py-20 bg-parachute-light-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Mission Statement */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-light leading-relaxed">
              Parachute Labs, PBC is building simpler tools for thought, starting with one of our most natural and intuitive interfaces, our voice.
            </h2>
            <p className="text-lg text-parachute-gray leading-relaxed">
              We are starting with a better voice recorder, both as an app and wearable device, helping you organize your thoughts and access them when and where you need them: out on a hike, hanging with a friend, or waking up from a nap. Keeping you connected without pulling your attention away from where you actually care to be.
            </p>
            <p className="text-lg text-parachute-gray leading-relaxed">
              Our goal is to create an ecosystem of tools to help you stay connected to the world and to the ones you care about. We are starting with voice but our passion is to deeply understand and augment all of the ways we make sense of the world: leveraging our environment, our relationships, our bodies, and our imagination.
            </p>
          </div>

          {/* Team Section */}
          <div className="space-y-12">
            <h3 className="text-2xl font-light">Who are we?</h3>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-xl font-medium">
                  <a href="https://www.linkedin.com/in/unforced/" target="_blank" rel="noopener noreferrer" className="hover:text-parachute-yellow transition-colors">
                    Aaron Gabriel Neyer
                  </a>
                </h4>
                <p className="text-parachute-gray leading-relaxed">
                  Aaron Gabriel Neyer is a builder and communicator with a deep interest in the meeting of the natural world and the digital world. With degrees in computer science, Ecopsychology, and creative technology & design (in progress); and experience in engineering & leadership at various startups and in developer relations at Google; he has spent much of his life exploring from an embodied level what it means to be alive, while also diving deep into building systems to better understand how we can organize our information to live more connected and coherent lives.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-medium">
                  <a href="https://www.linkedin.com/in/jborichevskiy/" target="_blank" rel="noopener noreferrer" className="hover:text-parachute-yellow transition-colors">
                    Jon Bo
                  </a>
                </h4>
                <p className="text-parachute-gray leading-relaxed">
                  Jon Bo is a creative technologist seeking to delight people with the magic of computers. Past experience includes building interfaces and architecture for collaborative pixel art games on blockchain, composable generative AI workflows, and large scale data aggregation research tooling. Previously founding engineer at Illumis (acquired by ComplySci), Ressemble (sales team note-taking), and Relational (cross-disciplinary design studio) with various experiences hosting community events; both in person and online.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-medium">
                  <a href="https://www.linkedin.com/in/neilyarnal/" target="_blank" rel="noopener noreferrer" className="hover:text-parachute-yellow transition-colors">
                    Neil Yarnal
                  </a>
                </h4>
                <p className="text-parachute-gray leading-relaxed">
                  Neil Yarnal is Creative Director and Brand Designer with 15 years of experience helping businesses build sustainable identities. He has worked across every step of the creative pipeline, from co-building forward-thinking Design incubators with the UNGC, to helping Commonweal.org find purpose & place. Neil's work is centered around "Who We* Are" and new creative fields like "Communal* Design." Devoted to creating living frameworks reoriented around strategic engagements identity, intent, and relational trust versus extractive metrics or transactional KPIs, Neil is excited about the future of interoperable Branded Products.
                </p>
              </div>
            </div>
          </div>

          {/* Current Status */}
          <div className="space-y-6">
            <h3 className="text-2xl font-light">Where are we at?</h3>
            <div className="space-y-4">
              <p className="text-parachute-gray leading-relaxed">
                We are in active research, design and prototype mode with our initial software and hardware.
              </p>
              <p className="text-parachute-gray leading-relaxed">
                We are bootstrapping while supporting ourselves via contracting work on various other projects. We are raising an early batch of $50k as a SAFE investment over the next 3 months to give us momentum to move towards a more substantial fundraising round in early 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;