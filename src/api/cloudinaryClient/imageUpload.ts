import cloudinaryApiClient from './index';

const uploadImage = async (files: any) => {
  console.log('files is ', files);
  console.log('I dey run');
  const formData = new FormData();
  const responses = [];
  console.log('up till here');
  console.log(files.length);

  for (let i = 0; i < files.length; i++) {
    console.log('or even here');
    formData.append('file', files[i]);
    formData.append('upload_preset', 'ec-license-register');
    console.log('formData is ', formData);
    try {
      const upload = await cloudinaryApiClient.post('/upload', formData);
      console.log(upload);
      responses.push(upload);
    } catch (error) {
      console.error(error);
    }
  }
  return responses;
};

export default uploadImage;
