import React from 'react';
import Game from "./components/Game";
import StartGame from "./components/StartGame"; // Importation du composant StartGame
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Authenticator>
        {({ signOut, user }) => {
          const email = user?.signInDetails?.loginId || 'unknown';
          return (
            <main>
              <header className='App-header'>
                <Game email={email} />
                <button 
                  onClick={signOut} 
                  style={{ 
                    margin: '20px', 
                    fontSize: '0.8rem', 
                    padding: '5px 10px', 
                    marginTop: '20px'
                  }}
                >
                  Sign Out
                </button>
              </header>
            </main>
          );
        }}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);