import axios from "axios";

const baseUrl = "/data/users.json";

//Userを取得する
const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

// Userを更新する
const update = async (id: any, newUser: any) => {
  console.log(newUser);

  const response = await axios.put(`${baseUrl}/${id}`, newUser);

  return response.data;
};

const _delete = async (id: number) => {
  await axios.delete(`${baseUrl}/${id}`);
  return id;
};

export default { getAll, update, delete: _delete };
