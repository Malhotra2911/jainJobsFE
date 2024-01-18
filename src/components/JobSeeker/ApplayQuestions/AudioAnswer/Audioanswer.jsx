import React from "react";
import useRecorder from "./useRecorder.js";
import MicNoneIcon from '@mui/icons-material/MicNone';
import VoiceOverOffIcon from '@mui/icons-material/VoiceOverOff';
import Tooltip from '@mui/material/Tooltip';
import "./Audioanswer.css"
export const Audioanswer = () => {
  let [audioURL, isRecording, startRecording, stopRecording] =
  useRecorder();
  return (
    <div>
      <div className="Audio_recoder">
        <audio className="audiooo" src={audioURL} controls />
        <div className="audio_btn">
        <Tooltip title="Start">
        <MicNoneIcon onClick={startRecording} disabled={isRecording}/>
        </Tooltip>
        <Tooltip title="Stop">
        <VoiceOverOffIcon onClick={stopRecording} disabled={!isRecording} />
        </Tooltip>
        </div>


        {/* <button onClick={stopRecording} disabled={!isRecording}>
          stop recording
        </button> */}

        {/* <p>
          <em>
            (On Codesandbox pop out the preview into a window to get a user
            media request.)
          </em>
        </p> */}
      </div>
    </div>
  );
};
