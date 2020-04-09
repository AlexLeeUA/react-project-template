class StorageService {
  setItem = async (key, value) => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  getItem = (key) => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  removeItem = (key) => {
    localStorage.removeItem(key);
  };
}

const storageService = new StorageService();

export default storageService;
