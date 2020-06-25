
console.log("*******test*********")
// 86acbd31cd7c09cf30acb66d2fbedc91daa48b86:1592930351.4338496
!function(n,r,e,t,c){var i,o="Promise"in n,u={then:function(){return u},catch:function(n){
return n(new Error("Airship SDK Error: Unsupported browser")),u}},s=o?new Promise((function(n,r){i=function(e,t){e?r(e):n(t)}})):u
;s._async_setup=function(n){if(o)try{i(null,n(c))}catch(n){i(n)}},n[t]=s;var a=r.createElement("script");a.src=e,a.async=!0,a.id="_uasdk",
a.rel=t,r.head.appendChild(a)}(window,document,'https://aswpsdkus.com/notify/v1/ua-sdk.min.js',
  'UA', {
    vapidPublicKey: 'BLtcWuvBDJ9viHwUn6OC8pPsarmu1TB_Q7HX6jmSs_n4eiedQZmDNylkllYMifMcCaRsZhAumdqwQBBjqlEKpPY=',
    appKey: 'hFUnvMjKRL2xhZm9gDckdw',
    token: 'MTpoRlVudk1qS1JMMnhoWm05Z0Rja2R3OmE5Z21QVnFlb3JkRGZYV0NtOWN6UFdlQ2NFcDZhdmVHSUhxaFNLUHFlTVE',
    workerUrl: '/push-worker.js'
  });
