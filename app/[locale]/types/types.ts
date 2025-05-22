import { IconType } from "react-icons";
import { LinkProps as NextLinkProps } from "next/link";

export interface ProdutoProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  className?: string;
}

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

export interface InputWrapperProps extends InputProps {
  label: string;
  htmlFor: string;
}

export interface SearchBarProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CardProdutoProps {
  id: string;
  image: string;
  title: string;
  price: string;
  onAddToCart?: () => void;
}

export interface ProdutoCarrinho extends ProdutoProps {
  quantidade: number;
}

export interface CardProdutoCarrinhoProps {
  id: string;
  nome: string;
  imagem: string;
  preco: number;
  quantidade: number;
  onAdd: () => void;
  onRemove: () => void;
  onDelete: () => void;
}

export interface CurtidasContextType {
  curtidas: string[];
  toggleCurtida: (id: string) => void;
}

export interface AlertProps {
  message: string;
  type?: "success" | "error" | "warning";
  duration?: number;
}
