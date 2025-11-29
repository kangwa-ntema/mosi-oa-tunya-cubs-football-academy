import React from 'react';

const OurProgramsPage = () => {
  return (
    <section className="ourProgramsPage">
      <h1 className="programsHeadline">Our Tailored Football Programs</h1>
      <p className="programsIntro">
        We offer skill-appropriate training programs designed to cater to different stages of a young player's development, ensuring every child finds their perfect fit and path to growth.
      </p>

      <div className="programCard kickOffClass">
        <h2 className="programTitle">Kick-Off Class</h2>
        <p className="programFocus"><strong>Focus:</strong> Fundamental skills, basic techniques, and fostering a love for the game.</p>
        <p className="programIdealFor"><strong>Ideal for:</strong> Beginners and those new to structured football training. This class builds a strong foundation in a fun and engaging environment.</p>
      </div>

      <div className="programCard risingStars">
        <h2 className="programTitle">Rising Stars</h2>
        <p className="programFocus"><strong>Focus:</strong> Developing tactical awareness, advanced techniques, and team play.</p>
        <p className="programIdealFor"><strong>Ideal for:</strong> Players ready to deepen their understanding and refine their skills. Participants will learn to apply individual techniques within a team context.</p>
      </div>

      <div className="programCard gameChangers">
        <h2 className="programTitle">Game Changers</h2>
        <p className="programFocus"><strong>Focus:</strong> Refining skills for competitive play, leadership development, and advanced tactics.</p>
        <p className="programIdealFor"><strong>Ideal for:</strong> Aspiring players looking to excel at higher levels. This program prepares athletes for competitive environments and leadership roles.</p>
      </div>
    </section>
  );
};

export default OurProgramsPage;