export default function SearchIcon({ color = "white", ...props }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.33333 7.33333C3.33333 5.12733 5.12733 3.33333 7.33333 3.33333C9.53933 3.33333 11.3333 5.12733 11.3333 7.33333C11.3333 9.53933 9.53933 11.3333 7.33333 11.3333C5.12733 11.3333 3.33333 9.53933 3.33333 7.33333ZM13.8047 12.862L11.5413 10.598C12.2433 9.69533 12.6667 8.564 12.6667 7.33333C12.6667 4.39267 10.274 2 7.33333 2C4.39267 2 2 4.39267 2 7.33333C2 10.274 4.39267 12.6667 7.33333 12.6667C8.564 12.6667 9.69533 12.2433 10.598 11.5413L12.862 13.8047C12.992 13.9347 13.1627 14 13.3333 14C13.504 14 13.6747 13.9347 13.8047 13.8047C14.0653 13.544 14.0653 13.1227 13.8047 12.862Z"
        fill={color}
      />
    </svg>
  );
}