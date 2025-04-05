import type { Meta, StoryObj } from '@storybook/react';
import { JBButton, Props } from "jb-button/react";

const meta: Meta<Props> = {
  title: "Example/form elements/JBButton",
  component: JBButton,
  argTypes: {
    loadingText: { control: 'text' },
  },
  args:{
    children:"button"
  }

};
export default meta;
type Story = StoryObj<typeof JBButton>;

export const Primary: Story = {
  args: {
    type: "primary",
    children: "primary button",
    loadingText: "loading text",
    disabled: false,
  }
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    children: "secondary button",
    loadingText: "",
  }
};

export const Disabled: Story = {
  args: {
    loadingText: "",
    disabled: true,
  }
};

export const Loading: Story = {
  args: {
    type: "primary",
    children: "with loading",
    isLoading: true,
    loadingText: "please wait",
  }
};

export const LoadingSecondary:Story = {
  args:{
    type: "secondary",
    children: "secondary button",
    isLoading: true,
    loadingText: "please wait",
  }
};
export const LoadingDisabled:Story = {
  args:{
    children: "disabled button",
    isLoading: true,
    disabled: true,
    loadingText: "please wait",
  }
};
