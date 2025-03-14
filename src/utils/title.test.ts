import { DEFAULT_PAGE_TITLE } from '@/config';
import { expect, it } from 'vitest';
import { getPageTitle } from './title';

it('不传参返回默认标题', () => {
  expect(getPageTitle()).toBe(DEFAULT_PAGE_TITLE);
});

it('传参返回拼接结果', () => {
  const text = '全景地图';
  expect(getPageTitle(text)).toBe(`${text} - ${DEFAULT_PAGE_TITLE}`);
});
