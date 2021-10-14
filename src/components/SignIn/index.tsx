import { FiX } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa'

import styled from './styles.module.scss';

export function SignIn() {
    const isUserLoggedIn = true;

    return isUserLoggedIn? (
        <button type="button"  className={styled.signIn}>
            <FaGithub color="#04d361"/>
            User name
            <FiX color="#737380" className={styled.closeIcon}/>
        </button>
        
         
    ) : (
        <button type="button"  className={styled.signIn}>
            <FaGithub color="#eba417"/>
            Sign in with Github
        </button>
    ); 
}