function domainName(url) {
  const regexHTTP = /[^]+\/\//gi;
  const regexWWW = /www./gi;
  const regexDOT = /\..*$/gi;

  const epmtyString = "";
  const domain = url
    .replace(regexHTTP, epmtyString)
    .replace(regexWWW, epmtyString)
    .replace(regexDOT, epmtyString);

  return domain;
}

console.log(domainName("https://www.cnet.ru")); // domain name = "cnet"
console.log(domainName("http://www.zombie-bites.com")); // domain name = "zombie-bites"
console.log(domainName("www.xkp.ru")); // domain name = "xkp"
console.log(domainName("http://github.com/carbonfive/raygun")); // domain name = "github"
