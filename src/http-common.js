import axios from "axios";

class http {
    /**
     * Fetches data from given url
     */
    get = (url , params) => {
        return axios.get(url, params);
    };
  
    /** 
     * post given data to url
     */
    create = (url , data ) => {
        return axios.post(url, data);
    };
  
    /**  
     * Updates data
     */ 
    update = (url, data) => {
        return axios.put(url, data);
    };
  
    /**
     * Delete 
     */
    delete = (url , data) => {
        return axios.delete(url, {...data});
    };
  };
  
  export {http};