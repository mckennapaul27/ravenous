const clientId = 'QhcXzGFfAn7V1MsEVK5EFw';
const secret = 'htdiQzyiDYXk8DMOgx2LdVHKbyZWHmestFrdnv5n6NqoHKFUd4omIJBuaUMHEKKG';
const accessToken = ;

const Yelp = {
  getAccessToken() {
    if(accessToken) {
      return new Promise(resolve =>
        resolve(accessToken));
    } return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`, {
      method: 'POST'
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      accessToken = jsonResponse.access_token;
    });
  },

  search(term, location, sortBy) {
    return Yelp.getAccessToken().then();
  }





};
