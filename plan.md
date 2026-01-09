 GET / 200 in 14.6s (compile: 11.3s, render: 3.4s)
Error sending email: Error: Invalid login: 535-5.7.8 Username and Password not accepted. For more information, go to
535 5.7.8  https://support.google.com/mail/?p=BadCredentials ffacd0b85a97d-432bd0daa84sm21373847f8f.2 - gsmtp
    at ignore-listed frames {
  code: 'EAUTH',
  response: '535-5.7.8 Username and Password not accepted. For more information, go to\n' +
    '535 5.7.8  https://support.google.com/mail/?p=BadCredentials ffacd0b85a97d-432bd0daa84sm21373847f8f.2 - gsmtp',
  responseCode: 535,
  command: 'AUTH PLAIN'
}
 POST /api/contact 500 in 1745ms (compile: 452ms, render: 1293ms)
 GET / 200 in 200ms (compile: 28ms, render: 172ms)
Error sending email: Error: Invalid login: 535-5.7.8 Username and Password not accepted. For more information, go to
535 5.7.8  https://support.google.com/mail/?p=BadCredentials 5b1f17b1804b1-47d7f703a8csm197348675e9.13 - gsmtp
    at ignore-listed frames {
  code: 'EAUTH',
  response: '535-5.7.8 Username and Password not accepted. For more information, go to\n' +
    '535 5.7.8  https://support.google.com/mail/?p=BadCredentials 5b1f17b1804b1-47d7f703a8csm197348675e9.13 - gsmtp',
  responseCode: 535,
  command: 'AUTH PLAIN'
}
 POST /api/contact 500 in 1191ms (compile: 3ms, render: 1187ms)
  
   in the brwoser console this happen HRPOST
http://localhost:3000/api/contact
[HTTP/1.1 500 Internal Server Error 1192ms]

	
POST
	http://localhost:3000/api/contact
Status
500
Internal Server Error
VersionHTTP/1.1
Transferred326 B (57 B size)
Referrer Policystrict-origin-when-cross-origin
Request PriorityHighest
DNS ResolutionSystem

	
Connection
	keep-alive
content-type
	application/json
Date
	Fri, 09 Jan 2026 09:53:07 GMT
Keep-Alive
	timeout=5
Transfer-Encoding
	chunked
vary
	rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch
	
Accept
	*/*
Accept-Encoding
	gzip, deflate, br, zstd
Accept-Language
	en-US,en;q=0.5
Connection
	keep-alive
Content-Length
	152
Content-Type
	application/json
Cookie
	__clerk_db_jwt_94RKxxUW=dvb_31vBQMpdYwnESqdgouRJIiLLEYQ; __refresh_94RKxxUW=XoiiuvJBKp1sgJFil0Xu; __clerk_db_jwt_Qa-2Q2Ce=dvb_32q1GnqWoiQy4QOvzjFgshK1n0l; __refresh_Qa-2Q2Ce=ZcdemrxdV9REmf9DxbCG; __client_uat_Qa-2Q2Ce=0; __clerk_db_jwt_a6pdzwMR=dvb_32xNAWoGsIaHMh6rr9RSBwJdUuY; __refresh_a6pdzwMR=8rMh7sj95wBNrlLkSnCh; __client_uat_idlVAD6G=0; __clerk_db_jwt_idlVAD6G=dvb_33me1rfkabaMEQ9cOFXebOOb5IN; __clerk_db_jwt_dxZ0N_MJ=dvb_33meOPF5zU1T5VJ2Wlujl1JKkst; __session_dxZ0N_MJ=eyJhbGciOiJSUzI1NiIsImNhdCI6ImNsX0I…yI6ImFjdGl2ZSIsInN1YiI6InVzZXJfMzZON1pid254eGpXOU9FWmFQTGtqU01TR2VzIiwidiI6Mn0.qBZfiHteSomdIxdFyjZvD5i1E8n6DeBXTKos8T2uUnhfahb-1TIhiF8oQQttW5y_YJIjKlORG3FFiO7pPlN8zSG-BFyh_1tyIbDpfc5qPA-JrsRLVBWtCdrl9MC7Vr3GDNVjm7WHoRSqi_GB6wIh8coG4kiOHK0sf6DOEtSs_GMul3ahbAdpjzZWtY9OZ2_sPn4Osqw431f34qJMMSqVg8k9af0vEK-6qzrY02hsOaN3FbrHr9n9C3N3zLidGeb6a-WvWwMrRtLoEAfOf6JsFmDy7h03K26oeKImiQlsMCxvw8ApTeuyqwGJD6FpPkk0wkRxs2Rodpo3alWWZZ-K-w; __client_uat_zQg2VU-c=1766841172; __client_uat=1766841172; __next_hmr_refresh_hash__=128
Host
	localhost:3000
Origin
	http://localhost:3000
Priority
	u=0
Referer
	http://localhost:3000/
Sec-Fetch-Dest
	empty
Sec-Fetch-Mode
	cors
Sec-Fetch-Site
	same-origin
User-Agent
	Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:146.0) Gecko/20100101 Firefox/146.0     fix it