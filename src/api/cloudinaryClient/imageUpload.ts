import toast from 'react-hot-toast';
import cloudinaryApiClient from './index';

const uploadImage = async (files: any) => {
  const formData = new FormData();
  const responses = [];

  for (let i = 0; i < files.length; i++) {
    formData.append('file', files[i]);
    formData.append('upload_preset', 'ec-license-register');

    try {
      const upload = await cloudinaryApiClient.post('/upload', formData);

      responses.push(upload);
    } catch (error) {
      //@ts-ignore
      toast.error(error.message, {
        position: 'top-right',
      });
    }
  }
  return responses;
};

export default uploadImage;
