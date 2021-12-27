import { MCrypt } from 'mcrypt';

export class Crypt {
  KEY = '6]gl7Iz##[KeCfdj&VQjl|q:_ZXFT%OS';

  public encrypt(value: string): string {
    var blowfishCfb = new MCrypt('rijndael-256', 'ecb');
    var iv = blowfishCfb.generateIv();

    blowfishCfb.open(this.KEY, iv);

    var ciphertext = blowfishCfb.encrypt(value);

    return ciphertext.toString('base64');
  }

  public decrypt(autenticate: string): string {
    var blowfishCfb = new MCrypt('rijndael-256', 'ecb');
    var iv = blowfishCfb.generateIv();

    blowfishCfb.open(this.KEY, iv);

    var ciphertext = blowfishCfb.decrypt(Buffer.from(autenticate, 'base64'));

    console.log(ciphertext.toString());
    return ciphertext.toString();
  }
}