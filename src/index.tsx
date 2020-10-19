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
            <Route exact path="doll-house/">
               <Redirect to="doll-house/entry" />
            </Route>
            <Route path="doll-house/entry" render={(props) => (
               <Entry {...props} room={RoomData.ENTRY} />
            )} />
            <Route path="doll-house/field_notes" render={(props) => (
               <FieldNotes {...props} room={RoomData.FIELD_NOTES} />
            )} />
            <Route path="doll-house/mail_room" render={(props) => (
               <MailRoom {...props} room={RoomData.MAIL_ROOM} />
            )} />
            <Route path="doll-house/studio" render={(props) => (
               <Studio {...props} room={RoomData.STUDIO} />
            )} />
            <Route path="doll-house/rec_room" render={(props) => (
               <RecRoom {...props} room={RoomData.REC_ROOM} />
            )} />
         </div>
      </ BrowserRouter >
      <ModalContainer />
   </div>

);

ReactDOM.render(container, document.getElementById('root'));
