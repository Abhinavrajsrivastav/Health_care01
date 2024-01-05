import React, { useEffect, useRef, useState } from 'react';
import './Video.css';
import { FaPhone, FaPhoneSlash } from 'react-icons/fa';
import { Route, Routes, Link } from 'react-router-dom';

const Video = () => {
  const [isCallActive, setIsCallActive] = useState(false);

  const startButtonRef = useRef(null);
  const hangupButtonRef = useRef(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const remoteImageRef = useRef(null);
  let localStream;
  let remoteStream;
  let peerConnection;

  useEffect(() => {
    const startButton = startButtonRef.current;
    const hangupButton = hangupButtonRef.current;

    startButton.addEventListener('click', startCall);
    hangupButton.addEventListener('click', endCall);

    return () => {
      startButton.removeEventListener('click', startCall);
      hangupButton.removeEventListener('click', endCall);
    };
  }, []);

  const startCall = async () => {
    try {
      localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      localVideoRef.current.srcObject = localStream;

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

      setIsCallActive(true);
    } catch (error) {
      console.error('Error starting call:', error);
    }
  };

  const handleIceCandidate = (event) => {
    if (event.candidate) {
      // Send the candidate to the other peer using your signaling server or other means
      // For simplicity, we'll just log it here
      console.log('ICE candidate:', event.candidate);
    }
  };

  const handleIceConnectionStateChange = () => {
    console.log('ICE connection state:', peerConnection.iceConnectionState);
  };

  const handleRemoteTrack = (event) => {
    if (!remoteStream) {
      remoteStream = new MediaStream();
      remoteVideoRef.current.srcObject = remoteStream;
    }

    remoteStream.addTrack(event.track);
  };

  const endCall = () => {
    if (peerConnection) {
      peerConnection.close();
    }

    localStream.getTracks().forEach(track => track.stop());
    localVideoRef.current.srcObject = null;
    remoteVideoRef.current.srcObject = null;

    setIsCallActive(false);
  };

  return (
        <div className="videoDiv">
          <div className="videos">
            {/* Local Video Section */}
            <div className="localVideoContainer">
              <video ref={localVideoRef} autoPlay muted className="localVideo"></video>
              <div className="overlayText">This is client screen</div>
            </div>

            {/* Remote Video Section */}
            <div className="remoteContainer">
              {/* <video ref={remoteVideoRef} autoPlay></video> */}
              <div className="overlayText">This is doctor screen</div>
              <img ref={remoteImageRef} src="../images/doctor.jpg" alt="Remote Image" className="localVideo"></img>
            </div>
          </div>
          <div className="controls">
            <button ref={startButtonRef} className={`videobtn ${isCallActive ? 'active' : ''}`}>
              <FaPhone /> {/* Font Awesome phone icon */}
            </button>
            <button ref={hangupButtonRef} className={`videobtn red ${isCallActive ? 'active' : ''}`}>
              <FaPhoneSlash /> {/* Font Awesome phone slash icon */}
            </button>
          </div>
        </div>
  );
};

export default Video;
