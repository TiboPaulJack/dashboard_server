const bcrypt : any = require('bcrypt');

export default function passwordHash(password: string) {

    const saltRounds: number = 10;
    const salt: string = bcrypt.genSaltSync(saltRounds);
    const hash: string = bcrypt.hashSync(password, salt);

    return hash;
}

