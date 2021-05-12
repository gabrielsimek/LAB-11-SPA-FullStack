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

export async function addResource(country) {
  const response = await request.post(URL).send(country);
  return response.body;
}

export async function deleteResource(id) {
  const response = await request.delete(`${URL}/${id}`);
  return response.body;
}

export async function getLanguages() {
  const response = await request.get('/api/countries/languages');
  return response.body;

}
export async function updateResource(country) {
  const response = await request.put(`${URL}/${country.id}`).send(country);
  return response.body;
}