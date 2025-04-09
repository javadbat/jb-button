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

export const LightColor: Story = {
  args: {
    color: "light",
    children: "light button",
  }
};
export const DarkColor: Story = {
  args: {
    color: "dark",
    children: "dark button",
  }
};
export const Positive: Story = {
  args: {
    color: "positive",
    children: "positive button",
  }
};
export const Danger: Story = {
  args: {
    color: "danger",
    children: "danger button",
  }
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "outline button",
  }
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "ghost button",
  }
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "text button",
  }
};
export const PositiveGhost: Story = {
  args: {
    variant: "ghost",
    color: "positive",
    children: "positive ghost button",
  }
};

export const ExtraSmall: Story = {
  args: {
    size: "xs",
    children: "extra small button",
  }
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "small button",
  }
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "medium button",
  }
};
export const Large: Story = {
  args: {
    size: "lg",
    children: "large button",
  }
};
export const ExtraLarge: Story = {
  args: {
    size: "xl",
    children: "extra large button",
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
  }
};

export const LoadingWithText: Story = {
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
export const HightOverflow: Story = {
  args: {
    children: "primary button With Height overflow",
    style:{width:'7rem'}
  }
};
export const CustomizedWidth: Story = {
  args: {
    children: "with 100% width",
    style:{width:'100%'}
  }
};