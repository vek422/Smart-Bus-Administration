import { io } from "socket.io-client";
import { BACKEND_BASE_URL } from "./service";
const URL = BACKEND_BASE_URL;

export const socket = io(URL);
