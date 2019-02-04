/**
 * that lib use node-rsa in node js and use browserify compile for browser
 * and use command bellow for compile it
 *
 *
 * browserify -r node-rsa --standalone CryptRSA > rsa-brow.js
 */

import { Injectable } from '@angular/core';
declare var CryptRSA: any;
declare var DeviceUUID: any;

@Injectable()
export class Encryption {

    constructor(options?: any) {

    }

    /**
     * Encrypt string with public key from RSA standard
     * @param {string} publicKey
     * @param {string} message string for encrypt
     * @returns {string}
     */
    // encryptRSA = (publicKey: string, message: string) => {
    //     const pubKey = new CryptRSA(publicKey);
    //     pubKey.setOptions({ encryptionScheme: 'pkcs1', environment: 'browser' });
    //     const encrypted = pubKey.encrypt(message, 'base64');
    //     return encrypted.toString();
    // };

    // /**
    //  * Encrypt string with private key from RSA standard
    //  * @param {string} privateKey
    //  * @param {string} message
    //  * @returns {string}
    //  */
    // encryptRSAPrivate = (privateKey: string, message: string) => {
    //     const priKey = new CryptRSA(privateKey);
    //     priKey.setOptions({ encryptionScheme: 'pkcs1', environment: 'browser' });
    //     const encrypted = priKey.encryptPrivate(message, 'base64');
    //     return encrypted.toString();
    // };

    // /**
    //  * Decrypt hash with private key from RSA standard
    //  * @param {string} privateKey
    //  * @param {string} message string encrypted to decrypt
    //  * @returns {string}
    //  */
    // decryptRSA = (privateKey: string, message: string) => {
    //     const priKey = new CryptRSA(privateKey);
    //     priKey.setOptions({ encryptionScheme: 'pkcs1', environment: 'browser' });
    //     const decrypted = priKey.decrypt(message, 'utf8');
    //     return decrypted.toString();
    // };

    // /**
    //  * Decrypt hash with public key from RSA standard
    //  * @param {string} publicKey
    //  * @param {string} message
    //  * @returns {string}
    //  */
    // decryptRSAPublic = (publicKey: string, message: string) => {
    //     const pubKey = new CryptRSA(publicKey);
    //     pubKey.setOptions({ encryptionScheme: 'pkcs1', environment: 'browser' });
    //     const decrypted = pubKey.decryptPublic(message, 'utf8');
    //     return decrypted.toString();
    // };

    /**
     * This method for get device id on PC via browser
     * @returns {any}
     */
    getUUID = () => {
        let uid = new DeviceUUID();
        return uid.get().replace(/[^0-9a-zA-Z]/gi, '');
    }
}
