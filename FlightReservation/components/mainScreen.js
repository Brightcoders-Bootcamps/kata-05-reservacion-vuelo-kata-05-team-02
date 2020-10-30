
import React, { useState } from 'react';
import {
  View,
  Text,  
} from 'react-native';

import SignupForm from './signupView';
import LoginView from './loginView';

const MainScreen=()=> {
    const [isLoginFormActive, setIsLoginFormActive ] = useState(false);

    return(
        <>
          {isLoginFormActive 
            ? <LoginView isLoginFormActive={isLoginFormActive}  setIsLoginFormActive={setIsLoginFormActive} />
            : <SignupForm setIsLoginFormActive={setIsLoginFormActive} />
          }

        </>
    );
    }
  
  
  
   export default MainScreen;