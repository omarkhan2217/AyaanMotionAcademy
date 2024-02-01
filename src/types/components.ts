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
  // onClick?: () => void;
  // type?: string;
  icon?: React.ReactNode | JSX.Element;
  isLink?:string;
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

export interface IPillProps
extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

export interface IourFacultyData
extends React.HTMLAttributes<HTMLDivElement>{
  image2?:string;
  image?:string;

}


export interface ISTestimonialCardProps
extends React.HTMLAttributes<HTMLDivElement>{
  y:number;
  stifness:  number ;
  name?:string;
  image?:string;
  comment?:string;
}