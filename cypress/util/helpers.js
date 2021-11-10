export const genereateUserEmail = `Usertest${Math.random() *
  1000000000}@gmail.com`;
export const generateRandomDay= (Math.floor(Math.random() * 10) + 1).toString();
export const generateRandomYear= (Math.floor(Math.random() * 10) + 2000).toString();
export const generateRandomMobileNum= (Math.floor(Math.random() * 10000000000)).toString();
export const zipcode='00000'
export default {
  genereateUserEmail,
  generateRandomDay,
  generateRandomYear,
  generateRandomMobileNum,
  zipcode
};

