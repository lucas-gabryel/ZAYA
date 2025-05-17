import { IconType } from "react-icons";
import { LinkProps as NextLinkProps } from "next/link";

export interface ProdutoProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export interface TextProps {
  children: React.ReactNode;
  size?: "sm" | "base" | "lg";
  weight?: "normal" | "bold" | "semibold";
  color?: string;
}

export interface TitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
}

export interface IconProps {
  icon: IconType;
  size?: number;
  className?: string;
}

export interface CustomLinkProps extends NextLinkProps {
  children: React.ReactNode;
  className?: string;
}
