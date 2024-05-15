import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

const uploadFileOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        console.log(localFilePath);
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        // fs.unlinkSync("public"+localFilePath,function(err){
        //     if(err) throw err;
        
        //     console.log('File deleted!');
        // });
        // fs.unlinkSync(`/${localFilePath}`);
        // file has been successfully uploaded
        console.log("File has been successfully uploaded", response.url);
        return response;

    } catch (error) {
        console.log(error);
        // delete or unlink the file you have uploaded on your server.
        // fs.unlinkSync("public"+localFilePath,function(err){
        //     if(err) throw err;
        
        //     console.log('File deleted!');
        // });
        // fs.unlinkSync(localFilePath); // public/temp/rest.jpg
        return null;
    }
}

export { uploadFileOnCloudinary };
