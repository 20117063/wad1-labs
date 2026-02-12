import JsonStore from "./json-store.js";

const stevieStore = new JsonStore("./models/stevie-store.json", { employee: {} });

export function getAppInfo() {
  return stevieStore.db.data.employee;
}


export default stevieStore;