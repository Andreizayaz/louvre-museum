import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

import puppeteer from 'puppeteer';

import store from 'src/store';
import i18n from 'src/i18next';

import HeaderContainer from '../HeaderContainer';

import { arrayOfLinks } from './testData';
import { supportedLangs, countriesCodes, langObject } from './testData';

expect.extend({ toMatchImageSnapshot });

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

    type ObjectKey = keyof typeof langObject;

    supportedLangs.forEach((item: string) => {
      userEvent.click(selectLangBtn);

      const langItem = screen.getByTestId(item);
      userEvent.click(langItem);

      const currentLanguage = screen.getByTestId('lang-code');

      expect(currentLanguage.textContent).toBe(item);

      const countryKey = item as ObjectKey;

      Object.values(langObject[countryKey]).forEach(
        (lang: string, index: number) => {
          expect(navLinks[index].textContent).toBe(lang);
        }
      );
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

describe('HeaderContainer render with puppeteer', () => {
  test('render HeaderContainer', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
      width: 1536,
      height: 722,
      deviceScaleFactor: 1
    });
    await page.goto('http://localhost:3000');

    const header = await page.$('.header');
    const image = await header?.screenshot();
    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: 'HeaderContainerSnapshot'
    });

    await browser.close();
  }, 10000);
});
