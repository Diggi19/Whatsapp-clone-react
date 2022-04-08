import React from 'react'
import '../style/style.css'
import Sidebar from './items/sidebar/Sidebar'
import Chat from './items/chat/Chat'
import { BrowserRouter as Router ,Route ,Switch} from 'react-router-dom'
import Loginform from './items/Login/Loginform'
import useGlobal from './items/contextapi/Context'
const App = () => {
    const{user,setuser} = useGlobal()
    console.log(user)
    if (!user) {
        return(
            <div className="app__logincontainer">
                <div className="app__login">
                    <Loginform setuser={setuser}/>
                </div>

            </div>
        )
    }
    return (
        <div className="app__container">
            <div className="app__body">
                <Router>
                    <Switch>
                        <Route path="/app/:id">
                            <div className="app__sidebar">
                                <Sidebar/>
                            </div>
                            <div className="app__chat">
                                <Chat/>
                            </div>
                        </Route>
                        <Route>
                            <div className="app__sidebar">
                                <Sidebar/>
                            </div>
                            <div className="app__nochat">
                                <div className="action__img"><img src="https://expandthebusiness.com/wp-content/uploads/left-arrow-web.png" alt="arrow"/></div>
                                <div className="alert__msg">No chat selected</div>
                                <div className="action__msg">Please click on a contact to open chat</div>
                                <div className="separation"></div>
                                
                            </div>
                        </Route>
                    </Switch>
                </Router>
                {/* chat */}
                
            </div>
            
        </div>
    )
}

export default App

// layout


{/* sidemenu */}
    {/* avatar and btn*/}
    {/* searchbar */}
    {/* contacts */}

{/* chat */}
    {/* constct avatar and buttons */}
    {/* mainchat */}
    {/* typebar */}
