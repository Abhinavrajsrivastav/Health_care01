const startButton = document.getElementById('startButton');
const hangupButton = document.getElementById('hangupButton');
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
let localStream;
let remoteStream;
let peerConnection;

startButton.addEventListener('click', startCall);
hangupButton.addEventListener('click', endCall);

async function startCall() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;

        peerConnection = new RTCPeerConnection();
        peerConnection.addEventListener('icecandidate', handleIceCandidate);
        peerConnection.addEventListener('iceconnectionstatechange', handleIceConnectionStateChange);
        peerConnection.addEventListener('track', handleRemoteTrack);

        localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));

        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);

        // Send the offer to the other peer using your signaling server or other means
        // For simplicity, we'll just log it here
        console.log('Offer created:', offer);
    } catch (error) {
        console.error('Error starting call:', error);
    }
}

function handleIceCandidate(event) {
    if (event.candidate) {
        // Send the candidate to the other peer using your signaling server or other means
        // For simplicity, we'll just log it here
        console.log('ICE candidate:', event.candidate);
    }
}

function handleIceConnectionStateChange() {
    console.log('ICE connection state:', peerConnection.iceConnectionState);
}

function handleRemoteTrack(event) {
    if (!remoteStream) {
        remoteStream = new MediaStream();
        remoteVideo.srcObject = remoteStream;
    }

    remoteStream.addTrack(event.track);
}

function endCall() {
    if (peerConnection) {
        peerConnection.close();
    }

    localStream.getTracks().forEach(track => track.stop());
    localVideo.srcObject = null;
    remoteVideo.srcObject = null;
}
