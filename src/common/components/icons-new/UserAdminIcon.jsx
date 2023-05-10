export default function UserAdminIcon({ color = "#FFFFFF", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="24"
      fill="none"
      viewBox="0 0 21 24"
      {...props}
    >
      <path
        fill={color}
        d="M10.5.5C4.702.5 0 5.135 0 10.85c0 4.796 3.313 8.82 7.805 9.993L10.5 23.5l2.695-2.657C17.686 19.671 21 15.646 21 10.85 21 5.135 16.298.5 10.5.5zm0 2.3c1.937 0 3.5 1.541 3.5 3.45 0 1.909-1.563 3.45-3.5 3.45S7 8.159 7 6.25C7 4.341 8.563 2.8 10.5 2.8zm0 16.445a8.433 8.433 0 01-7-3.703C3.535 13.254 8.167 12 10.5 12c2.322 0 6.965 1.254 7 3.542a8.433 8.433 0 01-7 3.703z"
      ></path>
    </svg>
  );
}