import React, { Component } from 'react';

const Splash = props => (
  <div className="splash-container">
    <div className="greeting">
      <h1>tripr</h1>
      <p>
        Enter your start and end location to begin planning your trip!
      </p>
    </div>
    <div>
      <form>
        <div>
          <input type="text" name="start" id="start-input" placeholder="Leaving from..." />
        </div>
        <div>
          <input type="text" name="end" id="end-input" placeholder="Going to..." />
        </div>
        <button id="submit-button" className="" type="submit">
            Let's hit the road!
        </button>
      </form>
    </div>
  </div>
);

export default Splash;
