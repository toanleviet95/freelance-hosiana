// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  	production: false,
  	apiUrl: 'http://staging02.hosiana.com.vn/api/v1',
  	captchaApikey: {
        reCaptcha2SiteKey: '6LfzUWMUAAAAAMCnElUKRpWqLtZzsGt7Upnq4USG', 
        invisibleCaptchaSiteKey: '6LfzUWMUAAAAAIbTwYmlxAbV_5Zrfw3vq2JbdyV8'
   	},
  	constant: {
    	LISTING_TYPE: [
	      	{ id: 0, title: 'All', active: true },
	      	{ id: 1, title: 'Residential' },
	      	{ id: 2, title: 'Commercial' }
    	]
  	},
    LANGUAGE: {
        default: 'en',
        supported: ['en', 'vi']
    },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
