import { v4 as uuidv4 } from 'uuid';

export const generateReference = (): string => {
    const random_string = uuidv4();
    return `${random_string}`;
}