import React/* { HtmlHTMLAttributes }*/ from 'react';

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
  icon?: React.ReactNode | JSX.Element;
  isLink?: string;
}

export interface IStudentCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  rank?: number | string;
  name: string;
  college: string;
  image?: string;
  color?: string;
  y?: number;
  stifness?: number;
  pillColor?: string;
}
export interface IHighlightedStudentCardProps
extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  bgColorWhite?:string;
  bgColor?: string;
  rank: number | string;
  name: string;
  description: string;
  image?: string;
  isReversed?: boolean;
  pillColor?: string;
}
export interface IOtherStudentCardProps
extends React.HTMLAttributes<HTMLDivElement> {
  rank?: number | string;
  name: string;
  image: string;
  college?: string;
  stream?: 'JEE' | 'NEET' | 'NIT' | 'BIT';
  isFacultyCard?: boolean;
}

export interface IPillProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  pillColor?: string;
}

export interface IourFacultyData
  extends React.HTMLAttributes<HTMLDivElement> {
  image2?: string;
  image?: string;
  
}


export interface ISTestimonialCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  image: string;
  comment: string;
}

interface Details {
  detail: string
}
export interface ISBatchesCardProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  BatchName: string;
  grade: number | string;
  guide: string;
  path?: string;
  image?: string;
  isScholar?: boolean;
  details: Details[];
}