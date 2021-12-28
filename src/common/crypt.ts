import { MCrypt } from 'mcrypt';

export class Crypt {
  KEY = '6]gl7Iz##[KeCfdj&VQjl|q:_ZXFT%OS';

  public encrypt(value: string): string {
    const blowfishCfb = new MCrypt('rijndael-256', 'ecb');
    const iv = blowfishCfb.generateIv();

    blowfishCfb.open(this.KEY, iv);

    const ciphertext = blowfishCfb.encrypt(value);

    return ciphertext.toString('base64');
  }

  public decrypt(autenticate: string): string {
    const blowfishCfb = new MCrypt('rijndael-256', 'ecb');
    const iv = blowfishCfb.generateIv();

    blowfishCfb.open(this.KEY, iv);

    const ciphertext = blowfishCfb.decrypt(Buffer.from(autenticate, 'base64'));

    return ciphertext.toString();
  }
}
