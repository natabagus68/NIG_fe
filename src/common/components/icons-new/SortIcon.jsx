export default function SortIcon({ color = "white", ...props }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8773 17.457L12.9033 18.99V14.437C12.9033 14.271 12.9453 14.108 13.0233 13.962L17.3233 6H6.64331L10.7653 13.978C10.8393 14.12 10.8773 14.278 10.8773 14.437V17.457ZM13.903 22C13.69 22 13.477 21.932 13.3 21.797L9.27398 18.752C9.02398 18.563 8.87698 18.268 8.87698 17.955V14.681L4.11198 5.459C3.95098 5.149 3.96398 4.778 4.14598 4.48C4.32698 4.182 4.65098 4 4.99998 4H19C19.352 4 19.678 4.185 19.859 4.488C20.039 4.79 20.047 5.165 19.88 5.475L14.903 14.69V21C14.903 21.379 14.689 21.726 14.349 21.895C14.208 21.965 14.055 22 13.903 22Z"
        fill={color}
      />
    </svg>
  );
}
