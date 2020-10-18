import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Entry } from "./Rooms/Entry/Entry";
import { MailRoom } from './Rooms/Mail Room/MailRoom';
import { Studio } from './Rooms/Studio/Studio';
import { RecRoom } from './Rooms/Recreational Room/RecRoom';
import { FieldNotes } from './Rooms/Field Notes/FieldNotes';
import { ModalContainer } from 'react-router-modal';
import { RoomData } from './Rooms/_Shared Components/RoomData';

const container = (
   <div>
      < BrowserRouter >
         <div>
            <Route exact path="/">
               <Redirect to="/entry" />
            </Route>
            <Route path="/entry" render={(props) => (
               <Entry {...props} room={RoomData.ENTRY} />
            )} />
            <Route path="/fieldnotes" render={(props) => (
               <FieldNotes {...props} room={RoomData.FIELD_NOTES} />
            )} />
            <Route path="/mailroom" render={(props) => (
               <MailRoom {...props} room={RoomData.MAIL_ROOM} />
            )} />
            <Route path="/studio" render={(props) => (
               <Studio {...props} room={RoomData.STUDIO} />
            )} />
            <Route path="/recroom" render={(props) => (
               <RecRoom {...props} room={RoomData.REC_ROOM} />
            )} />
         </div>
      </ BrowserRouter >
      <ModalContainer />
   </div>

);

ReactDOM.render(container, document.getElementById('root'));
