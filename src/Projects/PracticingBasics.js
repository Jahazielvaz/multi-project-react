import React from 'react';

import './Projects.css';

const PracticingBasics = () => {
  return(
    <div>
      <section className="instructions">
        <h2>Please follow our task list and execute each flawlessly</h2>
        <ul>
          <li>Simple: Create a simple component with a title that says "Welcome Ninjas" Style it with styled components</li>
          <li>Paradise1: Create a state component that has an object. The object contains a background image. It also contains the location of the depicted image: Country, State, and City</li>
          <li>Paradise2: Create a second component that has a new image. Create another subcomponent from which to pass props from, and pass the info through props (Do not use state)</li>
          <li>Paradise3: Create another component that has another new image. Use props, and have it change state on click</li>
        </ul>
      </section>
    </div>
  )
}

export default PracticingBasics;
