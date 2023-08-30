import classNames from "classnames";

interface Props {
  title: string;
  className?: string;
}

export const Title = ({ title, className }: Props) => {
  return <h1 className={classNames(className)}>{title}</h1>;
};
