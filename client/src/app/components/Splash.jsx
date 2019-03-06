import React, { Component } from 'react';

const Splash = props => {
  return (
    <div>
      <p>
        <h1>Welcome to Roadtrip Planner!</h1>
        Enter your start and end location to start a trip!
      </p>
      <div>
        <form>
          <div>
            <label for="start-input">Start</label>
            <input type="text" name="start" id="start-input" placeholder="Los Angeles" />
          </div>

          <div>
            <label for="end-input">End</label>
            <input type="text" name="end" id="end-input" placeholder="New York" />
          </div>

          <button id="submit-button" className="" type="submit">
            Let's Go!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Splash;
