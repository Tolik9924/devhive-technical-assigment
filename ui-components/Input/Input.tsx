import {
  Size,
  SizeType,
  Variant,
  VariantType,
} from "@/ui-design-atoms/parameters";
import { margin, MarginProps } from "@/ui-design-atoms/margin/margin";
import { classes } from "@/ui-design-atoms/classes";
import { capitalizeFirstLetter } from "@/ui-design-atoms/capitalize";

import styles from "./input.module.css";

export type Props = {
  value: string | number;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  id?: string;
  placeholder?: string;
  isDisabled?: boolean;
  size?: SizeType;
  fullWidth?: boolean;
  variant?: VariantType;
  error?: string;
  elementType?: "input";
};

export const Input = ({
  elementType: ElementType = "input",
  placeholder = "string",
  id = "id",
  isDisabled = false,
  size = "m",
  fullWidth = false,
  variant = "primary",
  error,
  onChange,
  value,
  type = "text",
  ...rest
}: Props & MarginProps) => {
  return (
    <div
      className={classes(styles.inputContainer, margin(rest), {
        [styles.fullWidth]: fullWidth,
      })}
    >
      <ElementType
        className={classes(styles.input, {
          [styles[Variant[variant]]]: variant,
          [styles.disabled]: isDisabled,
          [styles.placeholder]: placeholder,
          [styles[Size[size]]]: !!size,
          [styles.errored]: error,
        })}
        placeholder={capitalizeFirstLetter(placeholder)}
        autoComplete="off"
        disabled={isDisabled}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        min={0}
        {...rest}
      />
      {error && (
        <span
          className={classes({
            [styles[`error_${Size[size]}`]]: !!size,
            [styles.errorSpan]: error,
          })}
        >
          {error}
        </span>
      )}
    </div>
  );
};
