import React, { ChangeEvent } from "react";
import { Slider, withStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 200,
    margin: "0 auto",
  },
});

const CustomSlider = withStyles({
  root: {
    color: "#3f51b5",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
//FontSizeSlider.tsx

'use client'
interface FontSizeSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const FontSizeSlider: React.FC<FontSizeSliderProps> = ({ value, onChange }) => {
  const classes = useStyles();

  const handleSliderChange = (e: ChangeEvent<{}>, newValue: number | number[]) => {
    onChange(newValue as number);
  };

  return (
    <div className={classes.root}>
      <CustomSlider
        value={value}
        min={10}
        max={30}
        step={1}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default FontSizeSlider;