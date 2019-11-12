export default {
  MAX_ATTACHMENT_SIZE: 100000,
  baseMtlApiUrl: process.env.REACT_APP_MTL_BASE_API,
  auth0: {
    clientId: process.env.REACT_APP_AUTH0_CLIENTID,
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    redirectUri: process.env.REACT_APP_AUTH0_REDIRECT_URI,
    returnTo: process.env.REACT_APP_AUTH0_RETURN_TO,
  },
};
