import React from 'react';
import { FirebaseContext } from '../Firebase';

const Home = () => (
  <FirebaseContext.Consumer>
    {
      firebase => {
        return <div>Access to Firebase</div>;
      }
    }
  </FirebaseContext.Consumer>
);

export default Home;