import React from 'react';
import { JBButton } from 'jb-button/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../docs/styles/ant-design.css';
import '../../../docs/styles/aurora.css';
import '../../../docs/styles/bootstrap.css';
import '../../../docs/styles/candy.css';
import '../../../docs/styles/carbon.css';
import '../../../docs/styles/cupertino.css';
import '../../../docs/styles/fluent.css';
import '../../../docs/styles/forest.css';
import '../../../docs/styles/material.css';
import '../../../docs/styles/porcelain.css';
import '../../../docs/styles/sunset.css';
import '../../../docs/styles/terminal.css';
import './styles/style-ant-design.css';
import './styles/style-aurora.css';
import './styles/style-bootstrap.css';
import './styles/style-candy.css';
import './styles/style-carbon.css';
import './styles/style-cupertino.css';
import './styles/style-fluent.css';
import './styles/style-forest.css';
import './styles/style-material.css';
import './styles/style-porcelain.css';
import './styles/style-sunset.css';
import './styles/style-terminal.css';

const meta = {
  title: "Components/form elements/JBButton/Style",
  component: JBButton,
} satisfies Meta<typeof JBButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const styleSamples = [
  { name: "Carbon", className: "carbon-style carbon-style" },
  { name: "Aurora", className: "aurora-style aurora-style" },
  { name: "Forest", className: "forest-style forest-style" },
  { name: "Sunset", className: "sunset-style sunset-style" },
  { name: "Porcelain", className: "porcelain-style porcelain-style" },
  { name: "Candy", className: "candy-style candy-style" },
  { name: "Terminal", className: "terminal-style terminal-style" },
  { name: "Material", className: "material-style material-style" },
  { name: "Fluent", className: "fluent-style fluent-style" },
  { name: "Bootstrap", className: "bootstrap-style bootstrap-style" },
  { name: "Cupertino", className: "cupertino-style cupertino-style" },
  { name: "Ant Design", className: "ant-design-style" },
];

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M12 3.5 13.9 9l5.6 1.8-5.6 1.9L12 18.5l-1.9-5.8-5.6-1.9L10.1 9 12 3.5Z" fill="currentColor" />
    </svg>
  );
}

function ButtonStyleSample({ className }: { className: string }) {
  return (
    <div style={{
      display: "grid",
      gap: "0.75rem",
      width: "100%",
    }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        <JBButton className={className}>Primary</JBButton>
        <JBButton className={className} color="secondary">Secondary</JBButton>
        <JBButton className={className} color="danger">Danger</JBButton>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        <JBButton className={className} variant="outline">Outline</JBButton>
        <JBButton className={className} variant="ghost">Ghost</JBButton>
        <JBButton className={className} variant="text">Text</JBButton>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
        <JBButton className={className} size="sm"><SparkIcon /> Small</JBButton>
        <JBButton className={className} size="lg"><SparkIcon /> Large</JBButton>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        <JBButton className={className} isLoading loadingText="Saving">Saving</JBButton>
        <JBButton className={className} disabled>Disabled</JBButton>
      </div>
    </div>
  );
}

export const Gallery: Story = {
  name: "Gallery",
  render: () => (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(21rem, 1fr))",
      gap: "1.25rem",
      alignItems: "start",
      width: "min(100%, 82rem)",
    }}>
      {styleSamples.map((sample) => (
        <section
          key={sample.className}
          style={{
            display: "grid",
            gap: "0.75rem",
            minWidth: 0,
            padding: "1rem",
            background: "var(--jb-surface, #ffffff)",
            border: "1px solid var(--jb-border-color, #e5e7eb)",
            borderRadius: "0.75rem",
            boxShadow: "0 0.75rem 1.75rem oklch(0% 0 0 / 0.08)",
          }}
          className={sample.className.split(" ")[0]}
        >
          <div style={{
            width: "100%",
            color: "var(--jb-text-primary, #334155)",
            fontSize: "0.875rem",
            fontWeight: 700,
            lineHeight: 1.4,
            textAlign: "center",
          }}>
            {sample.name}
          </div>
          <ButtonStyleSample className={sample.className} />
        </section>
      ))}
    </div>
  ),
};

export const Default: Story = {
  name: "Default",
  render: () => <ButtonStyleSample className="" />,
};

export const Carbon: Story = {
  name: "Carbon",
  render: () => <ButtonStyleSample className="carbon-style carbon-style" />,
};

export const Aurora: Story = {
  name: "Aurora",
  render: () => <ButtonStyleSample className="aurora-style aurora-style" />,
};

export const Forest: Story = {
  name: "Forest",
  render: () => <ButtonStyleSample className="forest-style forest-style" />,
};

export const Sunset: Story = {
  name: "Sunset",
  render: () => <ButtonStyleSample className="sunset-style sunset-style" />,
};

export const Porcelain: Story = {
  name: "Porcelain",
  render: () => <ButtonStyleSample className="porcelain-style porcelain-style" />,
};

export const Candy: Story = {
  name: "Candy",
  render: () => <ButtonStyleSample className="candy-style candy-style" />,
};

export const Terminal: Story = {
  name: "Terminal",
  render: () => <ButtonStyleSample className="terminal-style terminal-style" />,
};

export const Material: Story = {
  name: "Material",
  render: () => <ButtonStyleSample className="material-style material-style" />,
};

export const Fluent: Story = {
  name: "Fluent",
  render: () => <ButtonStyleSample className="fluent-style fluent-style" />,
};

export const Bootstrap: Story = {
  name: "Bootstrap",
  render: () => <ButtonStyleSample className="bootstrap-style bootstrap-style" />,
};

export const Cupertino: Story = {
  name: "Cupertino",
  render: () => <ButtonStyleSample className="cupertino-style cupertino-style" />,
};

export const AntDesign: Story = {
  name: "Ant Design",
  render: () => <ButtonStyleSample className="ant-design-style" />,
};
