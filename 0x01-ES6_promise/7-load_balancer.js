export default function loadBalancer(chinaDownload, USDownload) {
  const china = chinaDownload();
  const US = USDownload();
  return Promise.race([china, US]).then((val) => console.log(val), (err) => console.log(err));
}
