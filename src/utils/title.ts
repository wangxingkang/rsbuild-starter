import { DEFAULT_PAGE_TITLE } from '@/config';
import { getEnvValue } from './env';

export function getPageTitle(text?: string) {
  const prefix = getEnvValue('PUBLIC_PAGE_TITLE') || DEFAULT_PAGE_TITLE;

  if (!text) {
    return prefix;
  }

  return `${text} - ${prefix}`;
}
