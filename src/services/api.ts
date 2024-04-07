import axios, {AxiosInstance, AxiosError} from 'axios';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
import { AppRoute, browserHistory } from '../const';


const BACKEND_URL = 'https://14.design.pages.academy/six-cities';
const REQUEST_TIME = 5000;


