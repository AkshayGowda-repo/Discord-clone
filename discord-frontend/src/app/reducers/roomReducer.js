const initState = {
    isUserInRoom: false,
    isUserRoomCreator: false,
    roomDetails: null,
    activeRooms: [],
    localStream: null,
    remoteStream: null,
    audioOnly: false,
    screenSharingStream: null,
    isScreenSharingActive: false,

};

const reducer = (state = initState, action) => {
    switch (action.type) {
        default: 
        return state;
    }
}

export default reducer;