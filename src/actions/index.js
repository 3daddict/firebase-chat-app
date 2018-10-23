import types from './types';
import { db } from '../firebase';


export const getMessages = () => dispatch => {

    const dbRef = db.ref('/chat-messages');

    dbRef.on('value', (snapshot) => {
        console.log('DB Snapshot: ', snapshot.val() );

        dispatch({
            type: types.GET_CHAT_MESSAGES,
            messages: snapshot.val()
        });
    });

    return dbRef;
}

export const createChatRoom = roomDetails => async dispatch => {
    const botMessage = {
        message: `Welcome to ${roomDetails.title}`,
        name: 'Chat-Bot'
    };

    const logKey = await db.ref('/chat-logs').push().key;

    roomDetails.charId = logKey;
    const roomRef = await db.ref('/chat-rooms').push(roomDetails);

    console.log('Room Ref :', roomRef.key);

    console.log('Log Key :', logKey);

}