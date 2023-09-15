import { createSlice } from '@reduxjs/toolkit';

export const cameraSlice = createSlice({
    name: 'camera',
    initialState: {
        cameraImage: null,
    },

    reducers: {
        setCameraImage: (state, action) => {
            state.cameraImage = action.payload;
        },
        resetCameraImage: (state) => {
            state.cameraImage = null;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },

});

export const { setCameraImage, resetCameraImage, incrementByAmount } = cameraSlice.actions;

export const selectCameraImage = (state) => state.camera.cameraImage;
//struggled a bit here while setting values for selector

export default cameraSlice.reducer;
