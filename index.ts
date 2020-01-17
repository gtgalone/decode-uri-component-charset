import iconv from 'iconv-lite';

export const decodeURIComponentCharset = (str: string, charset: string) => {
  if (!str) { return ''; }
  return str.replace(
    /(%([^%]{2}))+/g,
    (chars: any) => iconv.decode(Buffer.from(chars.split('%').slice(1).map((n: any) => parseInt('0x' + n))), charset),
  );
}
