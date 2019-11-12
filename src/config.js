export default {
  MAX_ATTACHMENT_SIZE: 100000,
  REACT_APP_BASE_API_URL: process.env.BASE_API_URL,
  auth0: {
    clientId: process.env.REACT_APP_AUTH0_CLIENTID,
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    redirect_uri: process.env.REACT_APP_AUTH0_REDIRECT_URI,
    return_to: process.env.REACT_APP_AUTH0_RETURN_TO
  },
};