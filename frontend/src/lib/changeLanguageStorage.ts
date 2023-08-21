
export const LANG = 'lang'

export const setLang = (lang: string) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(LANG, lang)
    }
}

export const getLang = () => {
    let lang;
    if (typeof window !== 'undefined') {
        lang = localStorage.getItem(LANG)
    }


    if (lang) {
        return lang
    } else {
        return 'ru'
    }
}