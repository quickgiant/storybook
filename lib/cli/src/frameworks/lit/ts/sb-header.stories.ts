import { Meta, Story } from '@storybook/lit';
import { html } from 'lit';

import { SbHeader } from './sb-header';

export default {
  title: 'Example/Header',
} as Meta;

const Template: Story<SbHeader> = ({ user }) => html`<sb-header .user="${user}"></sb-header>`;

export const LoggedIn: Story<SbHeader> = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut: Story<SbHeader> = Template.bind({});
LoggedOut.args = {};