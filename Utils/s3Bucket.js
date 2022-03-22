import dotenv from "dotenv";
import S3 from 'aws-sdk/clients/s3.js'
import fs from 'fs'
import ErrorHandler from './errorHandler.js';

dotenv.config();
const bucketName = process.env.AWS_BUCKET_NAME;
const region =  process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey,
});

// Upload a file to S3
export const uploadfile = async (file) => {
    console.log(bucketName, "bucketName");
    try {
        const fileStream = fs.createReadStream(file.path);
        const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
        };
       return await s3.upload(uploadParams).promise()
    } catch (error) {
        return new ErrorHandler(500, error);
    }   
}

// Get a file to S3
export const downloadFile = async (fileKey) => {
    try {
        const downloadParams = {
            Key: fileKey,
            Bucket: bucketName,
        }
        return await s3.getObject(downloadParams).createReadStream()
    } catch (error) {
        return new ErrorHandler(500, error);
    }  
}