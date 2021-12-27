import { Element, ElementCompact, xml2js } from 'xml-js';

export class XmlToJsonParser {
  constructor(private xml: string) {}

  handle() {
    const json = this.parse();

    return this.sanitizeJson(json);
  }

  private sanitizeJson(value: Element | ElementCompact) {
    const string = JSON.stringify(value)
      .replace(/(?<=")[A-z0-9]+:/g, '')
      .toLowerCase();

    const parsed = JSON.parse(string);

    return parsed?.envelope?.body;
  }

  private parse() {
    return xml2js(this.xml, {
      compact: true,
      textFn: this.removeJsonTextAttribute,
    });
  }

  private removeJsonTextAttribute(value: string, parentElement) {
    try {
      const popKeys = Object.keys(parentElement._parent);
      const keyNo = popKeys.length;
      const keyName = popKeys[keyNo - 1];
      const arrOfKey = parentElement._parent[keyName];
      const arrOfKeyLen = arrOfKey.length;
      if (arrOfKeyLen > 0) {
        const arr = arrOfKey;
        const arrIndex = arrOfKey.length - 1;
        arr[arrIndex] = value;
      } else {
        parentElement._parent[keyName] = value;
      }
    } catch (e) {}
  }
}
