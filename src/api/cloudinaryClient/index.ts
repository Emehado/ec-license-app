import { create } from 'apisauce';

const cloudinaryApiClient = create({
  baseURL: 'https://api.cloudinary.com/v1_1/perple/image',
});
export default cloudinaryApiClient;
