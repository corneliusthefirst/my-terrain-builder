import { IconPropsType } from '../types/icon.type';

export default function ErrorIcon({
  viewBox,
  width = 20,
  height = 20,
  fill = '#33363F',
  ...props
}: IconPropsType) {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox={viewBox || `0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9ZM1.8 9C1.8 5.02355 5.02355 1.8 9 1.8C12.9764 1.8 16.2 5.02355 16.2 9C16.2 12.9764 12.9764 16.2 9 16.2C5.02355 16.2 1.8 12.9764 1.8 9ZM8.99989 3.375C8.38598 3.375 7.89532 3.88568 7.91985 4.4991L8.12242 9.56317C8.14126 10.0341 8.52854 10.4062 8.99989 10.4062C9.47124 10.4062 9.85852 10.0341 9.87736 9.56318L10.0799 4.4991C10.1045 3.88568 9.6138 3.375 8.99989 3.375ZM7.70625 13.0781C7.70625 12.3791 8.27289 11.8125 8.97188 11.8125C9.67086 11.8125 10.2375 12.3791 10.2375 13.0781C10.2375 13.7771 9.67086 14.3438 8.97188 14.3438C8.27289 14.3438 7.70625 13.7771 7.70625 13.0781Z"
        fill={fill}
      />
    </svg>
  );
}
