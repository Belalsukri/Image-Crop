# Image-Crop
# Getting Started with Create React App

This project was bootstrapped with [Create React App]
## Available Scripts

In the project directory, you can run:

### `npm run dev`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\

## Explain the project

In Folder Client / src / components / Home.
The user can upload his pictures and crop a part of the image.

Writing a name for the image and saving the image with the name in Database I used his 'react-image-crop' office to crop the image and used his '@material-ui / core' library in Style.

After saving the image, the user is directed to the GetImages / page.

The image is displayed on this page and the user can click the Draw on the images button to direct to the Canvass page.

On this page, the user can draw on the image.

For drawing on the image I used the "roughjs / bundled / rough.esm" library.

In the backend I used 'express' in the 'server' file.

In Folder / modules, you can set 'mongoose' to save data in the Database.

I used the "concurrently" library for the run server and run client.
