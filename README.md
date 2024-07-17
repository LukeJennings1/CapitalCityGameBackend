# CapitalCityGameBackend

// Libraries used: 
// 1. Express - To simplify API generation.
// 2. dotenv - To enable us to use envs to protect valuable data 
// 3. cors - To enable us to disable cors in local development 
// 4. nodemon - To enable hot reloading of node servers to ease development

// How to run: 
// npm run dev - server should startup on port 3000

// Project Notes: 
// This headless backend fetches from the countries API on the backend upon API call. It then
// serves the data up to the caller providing that the authorisation key matches the one
// located in our .env folder. This helps to protect our server from foreign requests and
// stops us from making unnecessary API calls to external apis if the keys do not match which saves
// resources (and potentially considerable money given how expensive some external apis can be).  
//
// Normally, I would either setup a caching mechanism for the api calls so that we do not 
// hit the external api with unnecessary traffic or simply setup a scheduled job to poll the 
// external api every x amount of time and store the data in a database of which could then be queried.
// 
// Errors are handled via a .catch async method. In addition, if the request to the external API
// returns in error it will throw an error which will trigger the .catch. All requests respond 
// with a corresponding http code in addition to a message. 
//
// !!NOTE!! -- I would normally never include .env files in the github repo however in this case
// its purely a demonstration. .envs would usually be stored in a secure location such as lastpass
// or in a deployment pipeline with a env.example being stored in the repo. 