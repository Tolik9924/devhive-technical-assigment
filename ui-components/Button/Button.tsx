import { type MouseEvent, type ReactNode, forwardRef } from "react";
import styles from "./button.module.css";
import {
  Size,
  SizeType,
  Variant,
  VariantType,
} from "@/ui-design-atoms/parameters";
import { margin, MarginProps } from "@/ui-design-atoms/margin/margin";
import { classes } from "@/ui-design-atoms/classes";

type Ref = HTMLButtonElement;
type Props = {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  size?: SizeType;
  variant?: VariantType;
  fullWidth?: boolean;
  elementType?: "button" | "a";
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
} & MarginProps;

export const Button = forwardRef<Ref, Props>(function Button(props, ref) {
  const {
    elementType: ElementType = "button",
    type,
    children,
    size = "m",
    variant = "primary",
    fullWidth = false,
    disabled = false,
    onClick,
    ...rest
  } = props;

  return (
    <ElementType
      className={classes(styles.button, margin(rest), {
        [styles[Size[size]]]: !!size,
        [styles[Variant[variant]]]: !!variant,
        [styles.fullWidth]: fullWidth,
      })}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}
      // @ts-expect-error - ref should refer to the same type of element as ElementType
      ref={ref}
    >
      {children}
    </ElementType>
  );
});
