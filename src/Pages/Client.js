import { createClient } from "contentful";

const client = createClient({
  space: "<your space>",
  accessToken: "<your access token>",
});

export default client;
