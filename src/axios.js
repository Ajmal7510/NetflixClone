import axios from "axios";
import {baseUrl} from './Constants/Contants'

const instance = axios.create({
    baseURL: baseUrl,
  
  });

  export default instance