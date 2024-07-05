import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import zhTW from 'antd/locale/zh_TW';
import { EnabledLocale } from '@/types';
import { UserLocalePreferenceKey } from '@/consts.ts';


export const useI18n = () => {
  const { t, i18n } = useTranslation();
  const locales = {
    'en': enUS,
    'zh-CN': zhCN,
    'zh-TW': zhTW,
  };
  const [antdLocale, setAntdLocale] = useState(locales[i18n.language as EnabledLocale]);

  useEffect(() => {
    const userLocalePreference = localStorage.getItem(UserLocalePreferenceKey) || '';
    if (userLocalePreference && userLocalePreference !== i18n.language) {
      switchLocale(userLocalePreference as EnabledLocale);
    }
  }, []);

  useEffect(() => {
    setAntdLocale(locales[i18n.language as EnabledLocale]);
  }, [i18n]);

  const switchLocale = (locale: EnabledLocale) => {
    i18n.changeLanguage(locale).then();
  };

  return { t, i18n, antdLocale, switchLocale };
};