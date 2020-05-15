import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx"

interface StylesArgumentType {
  durationMs: number
}

const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: '100%',
      overflow: 'hidden',
    },
    item: {
      display: 'inline-block'
    },
    animatedItem: {
      position: "relative",
      "animation-name":`$horizontal-move`,
      "animation-duration":  (props: StylesArgumentType) =>  `${props.durationMs}ms`,
      "animation-timing-function": `${theme.transitions.easing.easeInOut}`,
      "animation-iteration-count": "infinite",
    },
    // TODO: left-end ---- right-end (not overflow)
    "@keyframes horizontal-move": {
      "0%": {
        left: "0",
      },
      "50%": {
        left: "100%",
      },
      "100%": {
        left: "0",
      },
    },
  }
});

const styleArgument: StylesArgumentType = {
  durationMs: 2000
}
const TargetAnimationView: React.FC = () => {
  const classes = useStyles(styleArgument);

  return (
    <div className={classes.container}>
      <span className={clsx(classes.animatedItem, classes.item)}>11</span>
    </div>
  );
};

export { TargetAnimationView };
