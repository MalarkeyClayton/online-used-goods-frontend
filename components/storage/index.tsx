import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getItem(_key: any) {
      console.log(_key);
      return Promise.resolve(null);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setItem(_key: any, value: any) {
      console.log(_key, value);
      return Promise.resolve(value);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    removeItem(_key: any) {
      console.log(_key);
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export default storage;
