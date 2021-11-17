import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import './BrowseStories.css';

function DisplayStory ({story, index, togglestory}) {
	return (
		<div
			className={"story " + (story.expanded ? 'expanded' : '')}
			key={index}
			onClick={() => togglestory(index)}
		>
			<div style={{color:story.color}} className="story-title">
				{story.title} <div style={{fontSize:18}}>by {story.author}</div>
			</div>
			<div className="story-summary">
        {story.summary}
        <button>Join</button> 
			</div>
		</div>
	)
}

function BrowseStories () {
  const [stories, setstories] = useState([
    {
      title: 'Scars of Fire',
      author: "Vyr",
      summary: "You are a member of the most powerful monarchy in the world: the Danish royal family, who has ruled for centuries with dragons by their side. On your eighteenth birthday, you finally learn the family secret. Instead of being gifted a dragon, you turn into one.",
      color: "rgb(168, 73, 92)",
      expanded: false
    },
    {
      title: 'The Prophecy in the mist',
      author:'Just a bard',
      summary: "For years, you have lived under the control of a cruel woman, caring for her family to pay off your father's debt. To keep him from debtor's prison, you obeyed without complaint. You would do anything to protect your kind-hearted father, who writes to you often although you have never seen him in person.",
      color: "rgb(169, 78, 255)",
      expanded: false
    },
    {
      title: 'Sound of menace',
      author:'Scribe',
      summary: "When your human kingdom places a toy and cookie embargo on the neighboring elf kingdom, they retaliate by unleashing a curse that turns all men into trolls and goblins and all woman into pixies and selkies. Now completely comprised of fantasy creatures, the once human inhabitants of this kingdom must deal with all baggage and annoyances that come from being a fantasy character.",
      color: "rgb(190, 190, 190)",
      expanded: false
    }
  ]);

  const togglestory = index => {
    setstories(stories.map((story, i) => {
      if (i === index) {
        story.expanded = !story.expanded
      } else {
        story.expanded = false;
      }

      return story;
    }))
  }


  return (
    <div className="App">
      
      <nav><Link to="/">Return</Link></nav>

      <h1 style={{textAlign:'center'}}>Browse stories</h1>

      <div className="stories">
        {stories.map((story, i) => (
          <DisplayStory story={story} index={i} togglestory={togglestory} />
        ))}
      </div>
      
    </div>
  );
}

export default BrowseStories;
      