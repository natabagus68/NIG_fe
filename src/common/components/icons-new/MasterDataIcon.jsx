export default function MasterDataIcon({ color = "#514E4E", ...props }) {
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
        d="M18.6901 15.9625L13.0001 18.6065V11.8905L19.0001 9.10355V15.5385C19.0001 15.7125 18.8821 15.8745 18.6901 15.9625ZM5.30308 15.9635C5.11408 15.8755 4.99808 15.7135 5.00008 15.5315V9.10355L11.0001 11.8905V18.6085L5.30308 15.9635ZM11.7069 5.064C11.7979 5.021 11.8989 5 11.9999 5C12.0999 5 12.2009 5.021 12.2919 5.064L17.6209 7.538L11.9999 10.15L6.37793 7.538L11.7069 5.064ZM20.6561 7.25855C20.6531 7.25055 20.6541 7.24155 20.6501 7.23355C20.6471 7.22555 20.6391 7.22055 20.6341 7.21255C20.5881 7.13655 20.5321 7.06955 20.4791 6.99955C20.4481 6.96555 20.4231 6.92755 20.3891 6.89855C20.1541 6.62255 19.8771 6.37955 19.5331 6.22055L13.1331 3.24755C13.1321 3.24755 13.1311 3.24755 13.1311 3.24655C12.4121 2.91455 11.5871 2.91555 10.8661 3.24755L4.46908 6.21955C4.12508 6.37855 3.84708 6.62055 3.61208 6.89655C3.57508 6.92755 3.54808 6.96955 3.51508 7.00655C3.46308 7.07355 3.41008 7.13855 3.36608 7.21055C3.36108 7.21955 3.35308 7.22555 3.34908 7.23355C3.34508 7.24255 3.34608 7.25155 3.34208 7.26055C3.13108 7.62255 3.00008 8.02955 3.00008 8.45755V15.5245C2.99208 16.4745 3.56408 17.3585 4.45808 17.7765L10.8571 20.7485C11.2191 20.9175 11.6071 21.0015 11.9961 21.0015C12.3841 21.0015 12.7721 20.9175 13.1331 20.7495L19.5301 17.7775C20.4221 17.3655 20.9991 16.4875 21.0001 15.5395V8.45655C20.9991 8.02855 20.8681 7.62155 20.6561 7.25855Z"
        fill={color}
      />
    </svg>
  );
}