import classes from "./coumn.module.css";
// import clsx from "clsx";

enum Fill {
  green = "#47D7AC",
  red = "#FD5557"
}

export type StatsSVGColumnProps = {
  variant: keyof typeof Fill;
  value: number;
  leftOffset: number;
  index: number;
  maxValue: number;
  duration: number;
  dynamic?: boolean;
}


const StatsSVGColumn: React.FC<StatsSVGColumnProps> = ({
  variant,
  value,
  leftOffset,
  maxValue,
  duration,
  index,
  dynamic = false
}) => {

  const fill = Fill[variant];
  const hatStyle: any = {
    "--dur": duration + "s",
    "--end": dynamic ? `${-value}px` : `-${maxValue - value}px`,
  }
  const DEFAULT_WIDTH = 7.46 * 2;

  const colsOffset = DEFAULT_WIDTH * index;
  const offset = colsOffset + leftOffset;
  const colStyles: any = {
    "--pos": offset + "px",
  }

  const moveValues = `${value};${maxValue};${value}`
  const fullHeight = 186.381;
  
  return (
    <g className={classes.col} style={colStyles}>
      <g className={dynamic ? classes.hatForced : classes.hat} style={hatStyle}>
        <rect // hat
          width="8.35356"
          height="8.35356"
          transform={`matrix(0.897821 -0.44036 0.897821 0.44036 73.5714 ${dynamic ? fullHeight : fullHeight - value})`}
          fill={fill}
        />
      </g>
      <g transform={`scale(1,-1) translate(0,-${fullHeight})`}>
        <rect // left side
          width="7.45932"
          height={value}
          x="73.5715"
          y="0"
          fill={`url(#paint_${variant}_left)`}
          opacity="0.7"
        >
          {!dynamic && <animate
            attributeType="XML"
            values={moveValues}
            attributeName="height"
            dur={duration + "s"}
            repeatCount="indefinite"
          />}
        </rect>

        <rect // right side
          x="81.0308"
          y="0"
          width="7.45932"
          height={value}
          fill={`url(#paint_${variant}_right)`}
        >
          {!dynamic && <animate
            attributeType="XML"
            values={moveValues}
            attributeName="height"
            dur={duration + "s"}
            repeatCount="indefinite"
          />}
        </rect>
      </g>

      <path // bottom left
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M73.5714 186.476L80.7466 191.286H81.0308V186.381H73.7134L73.5714 186.476V186.476Z"
        fill={fill}
        fill-opacity="0.24"
      />
      <path // bottom left
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M88.2458 186.381L81.0308 191.024V186.381H88.2458Z"
        fill={fill}
        fill-opacity="0.24"
      />
    </g>
  )
}

export default StatsSVGColumn;