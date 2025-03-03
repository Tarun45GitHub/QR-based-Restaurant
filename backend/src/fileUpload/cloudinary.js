import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_cloude_name, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_Secret // Click 'View API Keys' above to copy your API secret
    });
    
    const uploadOnCloudinary=async(localfilepath)=>{
      console.log(localfilepath);
      
      try {
         if(localfilepath){
           const response=await cloudinary.uploader.upload(localfilepath,{
              resource_type:"auto"
           })
           console.log(` ${response}`);
           fs.unlinkSync(localfilepath);
           return response;
         } 
         else return null; 
  
      } catch (error) {
         fs.unlinkSync(localfilepath) //remove the locally saved tempurary file as the upload operation got failed
         return null;
      }
  }
  
  export {uploadOnCloudinary};
     