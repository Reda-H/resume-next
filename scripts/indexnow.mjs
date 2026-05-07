const HOST = "herradi.com";
const KEY = "e84d29ab5d3d586e6421127cec720aff";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/experience`,
  `https://${HOST}/contact`,
  `https://${HOST}/stats`,
  `https://${HOST}/llms.txt`,
];

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URLS,
  }),
});

console.log(`IndexNow: ${res.status} ${res.statusText}`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
console.log(`Submitted ${URLS.length} URLs.`);
