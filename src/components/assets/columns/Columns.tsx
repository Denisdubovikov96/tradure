import Column, { StatsSVGColumnProps } from "./Column";

const StatsSVGColumns = ({
  range
}: any) => {
  const DEFAULT_GAP = 7.7;
  type Col = Omit<StatsSVGColumnProps, "index">;

  const cols = [{
    variant: "green",
    value: range / 2,
    maxValue: 120,
    duration: 6,
    leftOffset: 0,
        dynamic: true,
  },
  {
    variant: "red",
    value: range / 1.5,
    maxValue: 60,
    duration: 10,
    leftOffset: DEFAULT_GAP,
        dynamic: true,
  },
  {
    variant: "green",
    value: range / 1.2,
    maxValue: 120,
    duration: 6,
    leftOffset: 34.26,
        dynamic: true,
  },
  {
    variant: "red",
    value: range / 2,
    maxValue: 90,
    duration: 9,
    leftOffset: DEFAULT_GAP,
        dynamic: true,
  },
  {
    variant: "green",
    value: range / 2.4,
    maxValue: 120,
    duration: 6,
    leftOffset: 34.26,
        dynamic: true,
  },
  {
    variant: "red",
    value: range /2.6,
    maxValue: 90,
    duration: 9,
    leftOffset: DEFAULT_GAP,
        dynamic: true,
  },
  {
    variant: "green",
    value: range / 2,
    maxValue: 120,
    duration: 6,
    leftOffset: 34.26,
        dynamic: true,
  },
  {
    variant: "red",
    value: range / 3.2,
    maxValue: 90,
    duration: 14,
    leftOffset: DEFAULT_GAP,
        dynamic: true,
  },
  {
    variant: "green",
    value: range / 1.5,
    maxValue: 120,
    duration: 4,
    leftOffset: 34.26,
        dynamic: true,
  },
  {
    variant: "red",
    value: range / 2,
    maxValue: 90,
    duration: 7,
    leftOffset: DEFAULT_GAP,
        dynamic: true,
  },
  {
    variant: "green",
    value: range / 1.1,
    maxValue: 120,
    duration: 12,
    leftOffset: 34.26,
        dynamic: true,
  },
  {
    variant: "red",
    value: range / 1,
    maxValue: 90,
    duration: 6,
    leftOffset: DEFAULT_GAP,
        dynamic: true,
  },
].reduce((acc, c, i) => {
  return [
    ...acc,
    { ...c, leftOffset: c.leftOffset + (acc?.[i - 1]?.leftOffset || 0) }
  ]
}, [] as any)

  return (
    <>
      {
        (cols as Col[]).map((props, index) => (
          <Column
            key={index}
            index={index}
            {...props}
          />
        ))
      }
    </>
  )
}

export default StatsSVGColumns;