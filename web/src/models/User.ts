import { Eventing } from './Eventing'
import { Sync } from './Sync';
import { Attributes } from './Attribures';

export interface UserProps {
    id?: number;
    name?: string; // question mark for not required
    age?: number;   // ? = not required
}

const rootUrl = 'http://localhost:3000/users'

export class User {
    public events: Eventing = new Eventing()
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl)
    public attributes: Attributes<UserProps>

    constructor(attrs: UserProps) {
        this.attributes = new Attributes<UserProps>(attrs)
    }
}