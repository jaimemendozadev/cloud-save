const extractGoogleProfile = profile => {
    const {name, emails, photos } = profile;
    const first_name = name.givenName;
    const last_name = name.familyName;
    const email = emails[0].value;
    const social_login = true;
    const profile_picture = photos[0].value ? photos[0].value : '';

    const newUser = {
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