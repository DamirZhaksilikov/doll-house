import React from 'react';
import './index.scss';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Entry } from "./Rooms/Entry/Entry";
import { MailRoom } from './Rooms/Mail Room/MailRoom';
import { Studio } from './Rooms/Studio/Studio';
import { RecRoom } from './Rooms/Recreational Room/RecRoom';
import { FieldNotes } from './Rooms/Field Notes/FieldNotes';
import { ModalContainer } from 'react-router-modal';
import { RoomData } from './Rooms/_Shared Components/Room/RoomData';
import { Alias } from './Rooms/_Shared Components/Room/Alias';

export interface AppState {
    //    alias: Alias;
}

export default class App extends React.Component<{}, AppState> {
    constructor(props) {
        super(props);

        // this.state = {
        //     alias: new Alias()
        // }
    }

    public render() {
        // return <div>
        // < BrowserRouter basename={process.env.PUBLIC_URL}>
        //     <div>
        //         <Route exact path="/">
        //             <Redirect to="/entry" />
        //         </Route>
        //         <Route path="/entry" render={(props) => (
        //             <Entry {...props} alias={this.state.alias} 
        //             handleAliasUpdate={this.updateAlias.bind(this)} 
        //             room={RoomData.ENTRY} />
        //         )} />
        //         <Route path="/field_notes" render={(props) => (
        //             <FieldNotes {...props} alias={this.state.alias} room={RoomData.FIELD_NOTES} />
        //         )} />
        //         <Route path="/mail_room" render={(props) => (
        //             <MailRoom {...props} alias={this.state.alias}  room={RoomData.MAIL_ROOM} />
        //         )} />
        //         <Route path="/studio" render={(props) => (
        //             <Studio {...props} alias={this.state.alias}  room={RoomData.STUDIO} />
        //         )} />
        //         <Route path="/rec_room" render={(props) => (
        //             <RecRoom {...props} alias={this.state.alias}  room={RoomData.REC_ROOM} />
        //         )} />
        //     </div>
        // </ BrowserRouter >
        // <ModalContainer />
        // </div>

        return <div id="closing-notice">
            {"Shut for the time being."}
            <br></br><br></br>

            {"If you have my number I probably miss you, so give me a call or shoot me a text."}
            <br></br>
            <a href="mailto:damir.zhaksilikov@gmail.com">otherwise, you can always reach me by mail.</a>
            
        </div>
    }

    public updateAlias(value: string) {
        this.setState({
            //   alias: new Alias(value) 
        });
    }
}


