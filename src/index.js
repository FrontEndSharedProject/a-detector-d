const blockRules = [
  "?action=ads&",
  "?ad.vid=",
  "?ad_ids=",
  "?ad_number=",
  "?ad_partner=",
  "?ad_size=",
  "?ad_tag=",
  "?ad_width=",
  "?adarea=",
  "?adcentric=",
  "?adclass=",
  "?adcontext=",
  "?adflashid=",
  "?adformat=",
  "?adfox_",
  "?adloc=",
  "?adlocation=",
  "?adname=",
  "?adPageCd=",
  "?adpartner=",
  "?adsdata=",
  "?adsite=",
  "?adsize=",
  "?adslot=",
  "?adspot_",
  "?adTagUrl=",
  "?adtarget=",
  "?adtechplacementid=",
  "?adunit=",
  "?adunit_id=",
  "?adunitid=",
  "?adunitname=",
  "?adv_type=",
  "?adversion=",
  "?advert_key=",
  "?advertisement=",
  "?advertiser=",
  "?advsystem=",
  "?advtile=",
  "?advurl=",
  "?banner.id=",
  "?bannerid=",
  "?category=ad&",
  "?dfpadname=",
  "?framId=ad_",
  "?handler=ads&",
  "?impr?pageid=",
  "?phpAds_",
  "?service=ad&",
  "?type=ad&",
  "?view=ad&",
  "?wm=*&prm=rev&",
  "?wppaszoneid=",
  "?wpproads-",
  "?wpproadszoneid=",
  "?wpstealthadsjs=",
];

export default async function () {
  return new Promise((res) => {
    let rule = blockRules[Math.floor(Math.random() * blockRules.length)];
    fetch(`/${rule}`, {
      method: "HEAD",
      mode: "no-cors",
    })
      .then(() => {
        res(false);
      })
      .catch((error) => {
        res(true);
      });
  });
}
