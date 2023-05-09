export default function ChecklistIcon({ color = "#12B569", ...props }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Property 2=checkmark">
        <path
          id="Mask"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.86338 17.9999C9.58738 17.9999 9.32338 17.8859 9.13438 17.6849L4.27138 12.5059C3.89238 12.1039 3.91338 11.4709 4.31538 11.0929C4.71838 10.7149 5.35138 10.7349 5.72838 11.1369L9.85338 15.5279L18.2614 6.32587C18.6354 5.91687 19.2674 5.88987 19.6754 6.26187C20.0824 6.63387 20.1104 7.26687 19.7384 7.67387L10.6014 17.6739C10.4144 17.8799 10.1484 17.9979 9.87038 17.9999H9.86338Z"
          fill={color}
        />
      </g>
    </svg>
  );
}
