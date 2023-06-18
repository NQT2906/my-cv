import classNames from "classnames";
import {
  ProgressBackground,
  ProgressPercent,
  ProgressWrapper,
} from "./ProgressBarStyled";

interface IProgressBar {
  percent: number;
  overlayClassName: string;
}

export default function ProgressBar(props: IProgressBar) {
  const { percent, overlayClassName } = props;
  return (
    <ProgressWrapper className={classNames(overlayClassName)}>
      <ProgressBackground />
      <ProgressPercent percent={percent} />
    </ProgressWrapper>
  );
}
