import { Common } from './common';
import { LanguageDependentText } from './language-dependent-text';

export class Title extends Common {
  id?: string;
  name?: LanguageDependentText[];
}
