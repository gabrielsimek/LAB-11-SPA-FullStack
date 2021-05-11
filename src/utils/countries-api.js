import request from 'superagent';

const URL = '/api/countries';

export async function getResources() {
  const response = await request.get(URL);
  return response.body;
}

export async function getResource(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}