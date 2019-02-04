import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from '@app/core/services/local-storage.service';
import {TranslateService} from '@ngx-translate/core';

const LANGUAGE_KEY_STORED = 'language';

@Injectable({
	providedIn: 'root'
})
export class LanguageService {
	language:string = '';	
	constructor(protected translate:TranslateService, private localStorageService: LocalStorageService) { 
		this.translate.addLangs(environment.LANGUAGE.supported);
		this.translate.setDefaultLang(environment.LANGUAGE.default);
		let languageStored = this.localStorageService.getItem(LANGUAGE_KEY_STORED);
		if(languageStored) {
			this.language = languageStored;
		} else {
			const browserLang = this.translate.getBrowserLang();
			this.language = browserLang;
		}
		this.setLanguage(this.language);
	}

	/**
	* Get current language
	* @return mixed;
	*/
	getCurrentLanguage()  {
		return this.language;
    }
    
    /**
     * get instance service translate
     * 
     * @param language
     * 
     * @return {Any}
     */
    getInstance() {
        return this.translate;
    }

	/**
	* set current language
	* @return mixed;
	*/
	setLanguage(language: string) {
        if (this.checkMatch(language, environment.LANGUAGE.supported)) {
            this.language = language;
            this.translate.use(language);
            this.localStorageService.setItem(LANGUAGE_KEY_STORED, language);
        } else {
            this.translate.use(environment.LANGUAGE.default);
        }
    }

    /**
	* check math language in list language default
	* @return mixed;
	*/
    checkMatch(language: string, supported: Array<string>): boolean {
        return supported.filter(support => language.toLowerCase() === language).length > 0;
    }
}
