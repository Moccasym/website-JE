import React, { useState, useEffect } from 'react';
import CoreConcept from './CoreConcept.jsx';
import { STATS, OPT_CHANNEL } from '../../data.js';

const CoreConcepts = () => {
  const [highlightedStatIndex, setHighlightedStatIndex] = useState(0);
  const [highlightedOptIndex, setHighlightedOptIndex] = useState(0);

  useEffect(() => {
    const statsInterval = setInterval(() => {
      setHighlightedStatIndex((prevIndex) => (prevIndex + 1) % STATS.length);
    }, 5000);
    return () => clearInterval(statsInterval);
  }, []);

  useEffect(() => {
    const optInterval = setInterval(() => {
      setHighlightedOptIndex((prevIndex) => (prevIndex + 1) % OPT_CHANNEL.length);
    }, 5000);
    return () => clearInterval(optInterval);
  }, []);

  return (
    <section id="core-concepts">
      <div className="group-container stats-container">
        <ul className="core-concepts-list">
          {STATS.map((conceptItem, index) => (
            <CoreConcept 
              key={conceptItem.title} 
              {...conceptItem} 
              positionClass={getPositionClass(index, highlightedStatIndex, STATS.length)}
            />
          ))}
        </ul>
      </div>
      <h2 className="core-concepts-h2" >Datenanalysen angepasst auf ihr Unternehmen</h2>
      <div className="group-container opt-channel-container">
        <ul className="core-concepts-list">
          {OPT_CHANNEL.map((conceptItem, index) => (
            <CoreConcept 
              key={conceptItem.title} 
              {...conceptItem} 
              positionClass={getPositionClass(index, highlightedOptIndex, OPT_CHANNEL.length)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CoreConcepts;

// Helper function
function getPositionClass(index, highlightedIndex, length) {
  if (index === highlightedIndex) return 'highlighted';
  if ((highlightedIndex + 1) % length === index) return 'bottom-left';
  return 'bottom-right';
}
