# Jason Bryant's Resume

### Contact
jasonbryant@stanfordalumni.org<br/>
+1 301 455 3206 (us)<br/>
+351 919 494 354 (pt)<br/>
[LinkedIn](https://www.linkedin.com/in/jasonbryant1/)

# Site's Tech Stack

### Amazon s3
To host JSON files for all content within this site both production and development (staging, beta, local). 

- No need to deploy new code changes for content
- Can test a development version of content upates separately from production to ensure formatting, and spelling are correct
- If JSON is incorrectly formatted in development then production will not have issue


### Reactjs
Javascript library leveraged to create flexible user interfaces.

- reusable, styled components
- live updates for code changes on local machine means faster development

### Node.js, ExpressJS, & NextJS
Server-side rendered web app serving site pages and APIs.

- Client does not need to instantiate React to render
- Faster client-side experience


### Herokuapp
Beta, Staging, Production environments setup for an app pipeline to enable 

- testing updates in **Beta** against development branches
- merging to **Staging** to ensure in the process that updates will not break the production site
- **Production** environment for the public facing final product


### Github 
Version control integrated with Herokuapp for continuous integration and ease of use in implemented beta, staging, and production evironments. Leveraging Codeship for Continuous Integration.


### Codeship
Continuous Integration platform integrated with Github deployments.

- Ensuring the app builds properly before merged code makes it to staging

### Unit & Integration Testing
Both unit and integration testing implemented via Mocha and customized a shell script to ensure new code updates don't break the live site.

- Unit Testing
	- Testing pages compile and render as expected without having to visit them directly
- Integration Testing 
	- Ensuring any APIs on the server deliver the expected response(s)

	

