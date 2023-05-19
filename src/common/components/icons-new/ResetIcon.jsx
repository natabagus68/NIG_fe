export default function ResetIcon({ color = "#FFFFFF", ...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M13.535 8.95a.667.667 0 00-.837.434c-.625 1.964-2.463 3.283-4.575 3.283-2.642 0-4.79-2.094-4.79-4.667s2.148-4.667 4.79-4.667c1.152 0 2.238.402 3.096 1.114l-1.444-.238a.66.66 0 00-.766.548.666.666 0 00.549.766l2.83.468a.683.683 0 00.339-.032c.024-.009.044-.026.068-.039.044-.023.09-.043.128-.075.024-.019.04-.047.06-.07.032-.032.065-.064.088-.104.017-.028.024-.062.036-.094.016-.04.038-.076.046-.12l.502-2.666a.666.666 0 10-1.31-.248l-.182.961A6.153 6.153 0 008.123 2C4.747 2 2 4.691 2 8s2.747 6 6.123 6c2.694 0 5.044-1.693 5.846-4.212a.667.667 0 00-.434-.837z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}