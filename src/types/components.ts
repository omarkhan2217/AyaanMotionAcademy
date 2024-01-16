import React from 'react';

export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outline'
  | 'dark'
  | 'accent-primary'
  | 'accent-secondary'
  | 'accent-tertiary'
  | 'gold'
  | 'gold-dark'
  | 'gold-light'
  | 'gold-white'
  | 'error'
  | 'success-light'
  | 'light';

export type Sizes = 'xxs' | 'sm' | 'xs' | 'sm' | 'md' | 'lg' | 'icon_md';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: ButtonVariants;
  size?: Sizes;
  font?: 'nunito' | 'montserrat';
  // onClick?: () => void;
  // type?: string;
  icon?: React.ReactNode | JSX.Element;
}

export interface IStudentCardProps
extends React.HTMLAttributes<HTMLDivElement> {
  rank: number;
  name: string;
  college: string;
  image?: string;
  color?: string;
}

export interface IPillProps
extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}