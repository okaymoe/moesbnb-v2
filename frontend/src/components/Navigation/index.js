import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import ProfileButton from './ProfileButton';
import './Navigation.css';

const Navigation = ({ loaded }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const handleDemoLogin = () => {
        const emails = ['demo@user.io', 'user1@user.io', 'user2@user.io'];
        return dispatch(sessionActions.login({
            credential: emails[Math.floor(Math.random()*emails.length)],
            password: 'password'
        }))
    }

    const handleNewSpot = () => {
        history.push('/spots/new')
    }

    return (
        <nav className='nav-bar-container'>
            <NavLink exact to='/'>
            <div id='left-nav-info'>
            <a href="https://imgbb.com/">
                <img src="https://i.ibb.co/F0rf0Nk/favicon-ico.png" alt="favicon-ico" border="0" width="55"></img>
            </a>
            <p id="left-nav-logo" >
                moesbnb
            </p>
            </div>
            </NavLink>
            <div id='right-nav-info'>
                {sessionUser ?
                <>
                    <button className='new-spot-button' onClick={handleNewSpot}>
                        <svg version="1.1" id="right-nav-plus" xmlns="http://www.w3.org/2000/svg"
	                        width="20px"viewBox="0 0 45.402 45.402">
	                            <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		                            c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		                            c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		                            c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                        </svg>
                    </button>
                    <p id='right-nav-welcome'>Welcome {sessionUser.username}!</p>
                </>
                    : <div id='right-nav-demo-login' onClick={handleDemoLogin}>Demo Login</div>}
                { loaded && <ProfileButton user={sessionUser} /> }
            </div>
        </nav>
    );
}

export default Navigation;
