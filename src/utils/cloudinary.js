import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"

// initial config of cloudinary
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) =>{
    try{
        // if file path not found
        if(!localFilePath) return null

        // upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })

        // file uploaded successfull
        console.log("file is uploaded on cloudinary", response.url);
        return response
    }catch(error){
        // remove the local saved temp file as upload was not successful
        fs.unlinkSync(localFilePath)
        return null;
    }
}


export { uploadOnCloudinary}