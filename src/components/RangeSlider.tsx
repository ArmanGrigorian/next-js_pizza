"use client";

import { cn } from "@/lib/utils";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { forwardRef, Fragment, useEffect, useState } from "react";

interface RangeSliderProps {
  className?: string;
  min: number;
  max: number;
  step: number;
  formatLabel?: (value: number) => string;
  value?: [number, number] | readonly [number, number];
  onValueChange?: (values: [number, number]) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = forwardRef(
  (
    { className, min, max, step, formatLabel, value, onValueChange, ...props },
    ref,
  ) => {
    const initialValue = Array.isArray(value) ? value : [min, max];
    const [localValues, setLocalValues] = useState(initialValue);

    useEffect(() => {
      setLocalValues(Array.isArray(value) ? value : [min, max]);
    }, [min, max, value]);

    const handleValueChange = (newValues: [number, number]) => {
      setLocalValues(newValues);
      if (onValueChange) {
        onValueChange(newValues);
      }
    };

    return (
      <SliderPrimitive.Root
        ref={ref as React.RefObject<HTMLDivElement>}
        min={min}
        max={max}
        step={step}
        value={localValues}
        onValueChange={handleValueChange}
        className={cn(
          "relative mb-6 flex w-full touch-none items-center select-none",
          className,
        )}
        {...props}
      >
        <SliderPrimitive.Track className="bg-primary/20 relative h-1 w-full grow overflow-hidden rounded-full">
          <SliderPrimitive.Range className="bg-primary absolute h-full" />
        </SliderPrimitive.Track>
        {localValues.map((value, index) => (
          <Fragment key={index}>
            <div
              className="absolute text-center"
              style={{
                left: `calc(${((value - min) / (max - min)) * 100}%)`,
                top: "10px",
                transform: index === 0 ? "translateX(0%)" : "translateX(-100%)",
              }}
            >
              <span className="text-sm">
                {formatLabel ? formatLabel(value) : value}
              </span>
            </div>
            <SliderPrimitive.Thumb className="border-primary/50 focus-visible:ring-ring block h-4 w-4 rounded-full border bg-white shadow transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
          </Fragment>
        ))}
      </SliderPrimitive.Root>
    );
  },
);

RangeSlider.displayName = SliderPrimitive.Root.displayName;

export default RangeSlider;
