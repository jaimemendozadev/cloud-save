const extractGoogleProfile = profile => {
    const {name, emails, photos } = profile;
    let first_name = name.givenName;
    let last_name = name.familyName;
    let email = emails[0].value;
    let social_login = true;
    let profile_picture = photos[0].value;

    let newUser = {
      first_name,
      last_name,
      email,
      social_login,
      profile_picture,
    }

    return newUser;
}

module.exports = {
  extractGoogleProfile
}