import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import store from 'src/store';
import i18n from 'src/i18next';

import { links as ar_links } from 'src/i18next/locales/ar/ar_translation.json';
import { links as cn_links } from 'src/i18next/locales/cn/cn_translation.json';
import { links as de_links } from 'src/i18next/locales/de/de_translation.json';
import { links as en_links } from 'src/i18next/locales/en/en_translation.json';
import { links as es_links } from 'src/i18next/locales/es/es_translation.json';
import { links as fr_links } from 'src/i18next/locales/fr/fr_translation.json';
import { links as it_links } from 'src/i18next/locales/it/it_translation.json';
import { links as pt_links } from 'src/i18next/locales/pt/pt_translation.json';
import { links as ru_links } from 'src/i18next/locales/ru/ru_translation.json';

import HeaderContainer from '../HeaderContainer';
import { arrayOfLinks, supportedLangs, countriesCodes } from './testData';

describe('Header', () => {
  test('render Header items', () => {
    const { container } = render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <HeaderContainer />
        </I18nextProvider>
      </Provider>
    );

    const logo = screen.getByTestId('header-logo');
    const navLinks = container.getElementsByClassName('list-item__link link');
    const selectLangBtn = screen.getByRole('button');

    expect(logo).toBeInTheDocument();
    expect(navLinks.length).toBe(6);
    expect(selectLangBtn).toBeInTheDocument();
  });

  test('render navigation links content', () => {
    const { container } = render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <HeaderContainer />
        </I18nextProvider>
      </Provider>
    );

    const navLinks = container.getElementsByClassName('list-item__link link');

    arrayOfLinks.forEach((item, index) =>
      expect(item).toBe(navLinks[index].textContent)
    );
  });

  test('select language', () => {
    const { container } = render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <HeaderContainer />
        </I18nextProvider>
      </Provider>
    );

    const navLinks = container.getElementsByClassName('list-item__link link');
    const selectLangBtn = screen.getByRole('button');

    supportedLangs.forEach((item: string) => {
      userEvent.click(selectLangBtn);

      const langItem = screen.getByTestId(item);
      userEvent.click(langItem);

      const currentLanguage = screen.getByTestId('lang-code');

      expect(currentLanguage.textContent).toBe(item);

      switch (item) {
        case 'ar':
          Object.values(ar_links).forEach((item: string, index: number) => {
            expect(navLinks[index].textContent).toBe(item);
          });
          break;
        case 'cn':
          Object.values(cn_links).forEach((item: string, index: number) => {
            expect(navLinks[index].textContent).toBe(item);
          });
          break;
        case 'de':
          Object.values(de_links).forEach((item: string, index: number) => {
            expect(navLinks[index].textContent).toBe(item);
          });
          break;
        case 'en':
          Object.values(en_links).forEach((item: string, index: number) => {
            expect(navLinks[index].textContent).toBe(item);
          });
          break;
        case 'es':
          Object.values(es_links).forEach((item: string, index: number) => {
            expect(navLinks[index].textContent).toBe(item);
          });
          break;
        case 'fr':
          Object.values(fr_links).forEach((item: string, index: number) => {
            expect(navLinks[index].textContent).toBe(item);
          });
          break;
        case 'it':
          Object.values(it_links).forEach((item: string, index: number) => {
            expect(navLinks[index].textContent).toBe(item);
          });
          break;
        case 'pt':
          Object.values(pt_links).forEach((item: string, index: number) => {
            expect(navLinks[index].textContent).toBe(item);
          });
          break;
        case 'ru':
          Object.values(ru_links).forEach((item: string, index: number) => {
            expect(navLinks[index].textContent).toBe(item);
          });
          break;
      }
    });
  });

  test('check header styles', () => {
    const { container } = render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <HeaderContainer />
        </I18nextProvider>
      </Provider>
    );

    const header = screen.getByTestId('header');
    const headerContainer = screen.getByTestId('header-container');
    const logo = screen.getByTestId('header-logo');
    const navbar = screen.getByTestId('navbar');
    const linksList = screen.getByTestId('links-list');
    const linksListItems = container.getElementsByClassName(
      'links-list__list-item list-item'
    );
    const links = container.getElementsByClassName('list-item__link link');

    const selectLangBtn = screen.getByRole('button');

    userEvent.click(selectLangBtn);

    const dropDownMenu = screen.getByRole('menu');
    const dropDownMenuItems = screen.getAllByRole('menuitem');

    supportedLangs.forEach((item: string, index: number) => {
      console.log(countriesCodes);
      const optionsBlock = screen.getByTestId(item);
      expect(optionsBlock).toBeInTheDocument();
      expect(optionsBlock).toHaveClass('options');

      const optionsFlag = screen.getByTestId(`flag-${countriesCodes[index]}`);
      expect(optionsFlag).toBeInTheDocument();
      expect(optionsFlag).toHaveClass(
        `fi fi-${countriesCodes[index]} options__flag`
      );

      const optionsText = screen.getByTestId(`text-${countriesCodes[index]}`);
      expect(optionsText).toBeInTheDocument();
      expect(optionsText).toHaveClass('options__text');
    });

    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('header');

    expect(headerContainer).toBeInTheDocument();
    expect(headerContainer).toHaveClass('container header__container');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('header__logo');

    expect(navbar).toBeInTheDocument();
    expect(navbar).toHaveClass('header__navbar navbar');

    expect(linksList).toBeInTheDocument();
    expect(linksList).toHaveClass('navbar__links-list links-list');

    expect(linksListItems.length).toBe(6);
    Array.from(linksListItems).forEach((item) => {
      expect(item).toHaveClass('links-list__list-item list-item');
    });

    expect(links.length).toBe(6);
    Array.from(links).forEach((item) => {
      expect(item).toHaveClass('list-item__link link');
    });

    expect(dropDownMenu).toBeInTheDocument();
    expect(dropDownMenuItems.length).toBe(9);
  });
});

describe('HeaderContainer', () => {
  test('render HeaderContainer component to match snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <HeaderContainer />
          </I18nextProvider>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
