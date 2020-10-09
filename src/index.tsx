import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Entry } from "./Rooms/Entry/Entry";
import { MailRoom } from './Rooms/Mail Room/MailRoom';
import { Studio } from './Rooms/Studio/Studio';
import { RecreationalRoom } from './Rooms/Recreational Room/RecreationalRoom';
import { FieldNotes } from './Rooms/Field Notes/FieldNotes';
import { ModalContainer } from 'react-router-modal';
import { ENTRY, STUDIO, REC_ROOM, MAIL_ROOM, FIELD_NOTES } from './Rooms/_Shared Components/Room';

const container = (
   <div>
      < BrowserRouter >
         <div>
            <Route exact path="/">
               <Redirect to="/entry" />
            </Route>
            <Route path="/entry" render={(props) => (
               <Entry {...props} room={ENTRY} />
            )} />
            <Route path="/fieldnotes" render={(props) => (
               <FieldNotes {...props} room={FIELD_NOTES} />
            )} />
            <Route path="/mailroom" render={(props) => (
               <MailRoom {...props} room={MAIL_ROOM} />
            )} />
            <Route path="/studio" render={(props) => (
               <Studio {...props} room={STUDIO} />
            )} />
            <Route path="/recroom" render={(props) => (
               <RecreationalRoom {...props} room={REC_ROOM} />
            )} />
         </div>
      </ BrowserRouter >
      <ModalContainer />
   </div>

);

ReactDOM.render(container, document.getElementById('root'));
