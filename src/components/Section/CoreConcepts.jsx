import React, { useState, useEffect } from 'react';
import CoreConcept from './CoreConcept.jsx';
import { STATS, OPT_CHANNEL } from '../../data.js';

const CoreConcepts = () => {
  const [highlightedStatIndex, setHighlightedStatIndex] = useState(0);
  const [highlightedOptIndex, setHighlightedOptIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [expandedItem, setExpandedItem] = useState(null); // Track which item is expanded

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let statsInterval;
    if (!isMobile) {
      statsInterval = setInterval(() => {
        setHighlightedStatIndex((prevIndex) => (prevIndex + 1) % STATS.length);
      }, 5000);
    }
    return () => clearInterval(statsInterval);
  }, [isMobile]);

  useEffect(() => {
    let optInterval;
    if (!isMobile) {
      optInterval = setInterval(() => {
        setHighlightedOptIndex((prevIndex) => (prevIndex + 1) % OPT_CHANNEL.length);
      }, 5000);
    }
    return () => clearInterval(optInterval);
  }, [isMobile]);

  const handleClick = (section, index) => {
    if (isMobile) {
      const itemId = `${section}-${index}`;
      setExpandedItem(expandedItem === itemId ? null : itemId);
    }
  };

  return (
    <section id="core-concepts">
      <div className="group-container stats-container">
        <ul className="core-concepts-list">
          {STATS.map((conceptItem, index) => (
            <CoreConcept 
              key={conceptItem.title} 
              {...conceptItem} 
              positionClass={isMobile ? 
                (expandedItem === `stats-${index}` ? 'expanded' : '') :
                getPositionClass(index, highlightedStatIndex, STATS.length)}
              onClick={() => handleClick('stats', index)}
            />
          ))}
        </ul>
      </div>
      <h2 className="core-concepts-h2">Datenanalysen angepasst auf ihr Unternehmen</h2>
      <div className="group-container opt-channel-container">
        <ul className="core-concepts-list">
          {OPT_CHANNEL.map((conceptItem, index) => (
            <CoreConcept 
              key={conceptItem.title} 
              {...conceptItem} 
              positionClass={isMobile ? 
                (expandedItem === `opt-${index}` ? 'expanded' : '') :
                getPositionClass(index, highlightedOptIndex, OPT_CHANNEL.length)}
              onClick={() => handleClick('opt', index)}
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
