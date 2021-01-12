import { File } from "../files";

export function normalizeImage(file: File) {
    return `http://192.168.0.28:5000/images/${file.name}`;
}
