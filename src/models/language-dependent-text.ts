import { Common } from './common';

export abstract class LanguageDependentText extends Common {
  country?: string;
  lang?: string;
  text?: string;
  title?: string;
}
