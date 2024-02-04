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
  rank: number;
  name: string;
  college: string;
  image?: string;
  color?: string;
  y?: number;
  stifness?: number;
}
export interface IHighlightedStudentCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  rank: number;
  name: string;
  description: string;
  image?: string;
  isReversed?: boolean;
}

export interface IPillProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

export interface IourFacultyData
  extends React.HTMLAttributes<HTMLDivElement> {
  image2?: string;
  image?: string;

}


export interface ISTestimonialCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  image?: string;
  comment?: string;
}

export interface ISBatchesCardProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  BatchName?: string;
  grade?: number | string;
  guide?: string;
  image?: string;
  detaile1?: string;
  detaile2?: string;
  detaile3?: string;
  detaile4?: string;
  detaile5?: string;
  detaile6?: string;

}