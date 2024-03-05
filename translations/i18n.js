import { initI18n } from 'i18n-pro'
import ar from './Arabic.json';
import ru from './Russian.json';
import zh from './Chinese.json';
import es from './Spanish.json';
import ja from './Japanese.json';
import de from './German.json';
import fr from './French.json';
import it from './Italian.json';
import ko from './Korean.json';
import pt from './Portuguese.json';
import el from './Greek.json';
import uk from './Ukrainian.json';
import nl from './Dutch.json';


const {
  t,
  setI18n,
  withI18n,
  
} = initI18n({
  namespace: 'networkTranslations',
  langs: {
    ar,
    ru,
    zh,
    es,
    ja,
    de,
    fr,
    it,
    ko,
    pt,
    el,
    uk,
    nl
  },
  locale: typeof window !== "undefined" ? (window.localStorage.getItem('locale') || 'en') : 'en'
})



export {
  t,
  setI18n,
  withI18n,
}