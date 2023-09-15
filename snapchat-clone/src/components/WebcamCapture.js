
import Webcam from "react-webcam";
import React, { useRef, useCallback } from 'react';
import { useDispatch } from "react-redux";
import { setCameraImage } from "../features/cameraSlice";
import { useNavigate } from "react-router-dom";
import './WebcamCapture.css'
import { RadioButtonUnchecked } from "@mui/icons-material";

const videoConstraints = {
    width: 220,
    height: 400,
    facingMode: "user"
};

const WebcamCapture = () => {
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [image, setImage] = useState(null)
    const capture = useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            dispatch(setCameraImage(imageSrc));

            navigate("/preview");
            // console.log(imageSrc);
            //checking for screenshot 
            // setImage(imageSrc);
            //checking for screenshot 
        },
        [webcamRef, dispatch, navigate]
    );
    return (
        <div className="webcam__capture">
            <Webcam
                mirrored={true}
                audio={false}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
            />
            <RadioButtonUnchecked
                onClick={capture}
                className='webcamCapture__button'
            />
        </div>
    );
};
export default WebcamCapture;