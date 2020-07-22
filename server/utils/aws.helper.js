const environment = process.env.ENVIRONMENT,
  AWS = require('aws-sdk')

AWS.config.update({
    region: 'us-east-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})
const s3 = new AWS.S3({ apiVersion: '2012-10-17' })

module.exports = {
    getAWSJSON: async (path, file, res) => {
        const bucket = 'jason-bryant-resume',
        envSpecificFolder = environment != 'PRODUCTION' || 'production' ? 'dev-review-staging' : 'production',
        key = `${path}/${envSpecificFolder}/${file}`
    
        console.log(`Pulling from AWS bucket: ${bucket}/${key}`)
        
        s3
            .getObject({
                Bucket: bucket,
                Key: key
            })
            .on('success', response => {
                res.send(response.data.Body.toString('utf-8'))
            })
            .on('error', response => {
                res.send(response)
            })
            .send()
    }
}