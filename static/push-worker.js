console.log("push worker....")
// 86acbd31cd7c09cf30acb66d2fbedc91daa48b86:1592930351.4338496
importScripts('https://aswpsdkus.com/notify/v1/ua-sdk.min.js')
uaSetup.worker(self, {
  defaultIcon: 'https://portalfast.ite.mypepsico.com/ep/common/portal/unprotected/dev/notification/logo/MyPepsiCoLogo.jpg',
  defaultTitle: 'MyPepsiCo Web notification',
  defaultActionURL: 'https://web.dev.mypepsico.com',
  appKey: 'hFUnvMjKRL2xhZm9gDckdw',
  token: 'MTpoRlVudk1qS1JMMnhoWm05Z0Rja2R3OmE5Z21QVnFlb3JkRGZYV0NtOWN6UFdlQ2NFcDZhdmVHSUhxaFNLUHFlTVE',
  vapidPublicKey: 'BLtcWuvBDJ9viHwUn6OC8pPsarmu1TB_Q7HX6jmSs_n4eiedQZmDNylkllYMifMcCaRsZhAumdqwQBBjqlEKpPY='
})
