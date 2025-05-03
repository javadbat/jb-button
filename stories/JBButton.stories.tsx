import type { Meta, StoryObj } from '@storybook/react';
import { JBButton, Props } from "jb-button/react";
import React ,{ Fragment } from 'react';

const meta: Meta<Props> = {
  title: "Components/form elements/JBButton",
  component: JBButton,
  argTypes: {
    loadingText: { control: 'text' },
  },
  args: {
    children: "button"
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
export const WithIcon: Story = {
  args: {
    children: 
    <Fragment>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9998 22.6C10.8898 22.6 9.85982 22.13 9.08982 21.29L2.22982 13.75C1.25982 12.69 0.959818 10.82 1.53982 9.51003L4.09983 3.75003C4.79983 2.18003 5.96983 1.41003 7.68983 1.41003H16.2798V2.16003V1.41003C17.9998 1.41003 19.1698 2.17004 19.8698 3.74004L22.4298 9.50003C23.0098 10.81 22.7198 12.68 21.7498 13.74L14.8998 21.29C14.1498 22.13 13.1098 22.6 11.9998 22.6ZM16.2898 2.90004H7.69982C6.38982 2.90004 5.85982 3.48003 5.47982 4.35003L2.91982 10.11C2.57982 10.88 2.77982 12.11 3.33982 12.73L10.1998 20.27C10.6798 20.8 11.3198 21.09 11.9998 21.09C12.6798 21.09 13.3198 20.8 13.7998 20.27L20.6498 12.72C21.2198 12.09 21.4198 10.87 21.0698 10.1L18.5098 4.34003C18.1298 3.48003 17.5998 2.90004 16.2898 2.90004Z" fill="currentColor" />
        <path d="M3.5 8.74999C3.09 8.74999 2.75 8.40999 2.75 7.99999C2.75 7.58999 3.09 7.24999 3.5 7.24999L20.5 7.23999C20.91 7.23999 21.25 7.57999 21.25 7.98999C21.25 8.39999 20.91 8.73999 20.5 8.73999L3.5 8.74999Z" fill="currentColor" />
      </svg>
      <div>With Icon</div>
    </Fragment>,
  }
};
export const Secondary: Story = {
  args: {
    color: "secondary",
    children: "secondary button",
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
export const Warning: Story = {
  args: {
    color: "warning",
    children: "warning button",
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
export const DisabledOutlined: Story = {
  args: {
    loadingText: "",
    disabled: true,
    variant: "outline",
    children: "disabled outlined button",
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

export const LoadingSecondary: Story = {
  args: {
    type: "secondary",
    children: "secondary button",
    isLoading: true,
    loadingText: "please wait",
  }
};
export const LoadingDisabled: Story = {
  args: {
    children: "disabled button",
    isLoading: true,
    disabled: true,
    loadingText: "please wait",
  }
};
export const HightOverflow: Story = {
  args: {
    children: "primary button With Height overflow",
    style: { width: '7rem' }
  }
};
export const CustomizedWidth: Story = {
  args: {
    children: "with 100% width",
    style: { width: '100%' }
  }
};