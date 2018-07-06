export const INIT_SOCIAL_AUTH = 'INIT_SOCIAL_AUTH';

export const initSocialAuth = () => {
  const payload = {
    authInProgress: true
  }
  return {
    type: INIT_SOCIAL_AUTH,
    payload,
  }
}